const express=require('express');
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv');
dotenv.config();


const  url=process.env.MONGO_URL;
const client=new MongoClient(url);

const fetchtestcases=async(Pid)=>{
    try {
        let result=await client.connect();
        let db=result.db('Database_1');
        let collection=db.collection('TestCases');
        let response=await collection.find({'Pid':Pid}).toArray();
        return response;
        } catch (error) {
            console.log("Cannot get problems from MongoDB");
            console.log(err);
        }
}

module.exports={fetchtestcases};