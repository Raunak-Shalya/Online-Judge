const express=require('express');
const router=express.Router();
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv');
dotenv.config();


const  url=process.env.MONGO_URL;
const client=new MongoClient(url);

router.get('/',async(req,res)=>{
    try {
    let result=await client.connect();
    let db=result.db('Database_1');
    let collection=db.collection('Problems');
    let response=await collection.find({}).sort({"Pid":1}).toArray();
    res.status(200).send(response);
    } catch (error) {
        console.log("Cannot get problems from MongoDB");
        console.log(err);
    }
})

module.exports=router;