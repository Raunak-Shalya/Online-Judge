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
        const output=executeCpp(codepath,IP);
      //   console.log(output);
      //   console.log(OP);
        if(OP==output){
         console.log("match");
         res.send("Accepted");
        }
        else{
         console.log("error no match")
         res.json(output);
        }
     }
})

module.exports= router;