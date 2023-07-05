const express=require('express');
const { generateFile } = require('../fileGenerator');
const router=express.Router();


router.post('/',(req,res)=>{
     const {language,code}=req.body;
     if(code==undefined){
        res.status(404).send("No Code Found");
     } 
     else{
        generateFile(language,code);
     }
})

module.exports= router;