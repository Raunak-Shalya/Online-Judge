const express=require('express');
const { generateFile } = require('../fileGenerator');
const { executeCpp } = require('../executecode');
const { fetchtestcases } = require('../controllers/fetchtestcases');
const router=express.Router();


router.post('/',async(req,res)=>{
     const {language,code,Pid}=req.body;
     if(code==undefined){
        res.status(404).send("No Code Found");
     } 
     else{
        const testcases=await fetchtestcases(Pid);
        let { IP,OP }=testcases[0];
        IP=IP.replaceAll('\\n','\n')
        OP=OP.replaceAll('\\n',' ')
        const codepath=await generateFile(language,code);
        try{
         const output=executeCpp(codepath,IP);
         if(OP==output){
            res.send("Accepted");
         }
         else{
            res.send("Wrong Answer");
         }
        }
        catch(e){
          res.send("Compilation Error");
        }
     }
})

module.exports= router;