const express=require('express');
const { generateFile } = require('../fileGenerator');
const { executeCpp } = require('../executecode');
const router=express.Router();


router.post('/',async(req,res)=>{
     const {language,code}=req.body;
     if(code==undefined){
        res.status(404).send("No Code Found");
     } 
     else{
        const codepath=await generateFile(language,code);
        const output=executeCpp(codepath);
        console.log(output);
     }
})

module.exports= router;