const { MongoClient } = require('mongodb');
const dotenv=require('dotenv');
dotenv.config();


const  url=process.env.MONGO_URL;
const client=new MongoClient(url);

async function getData(){
    
    let result=await client.connect();
    let db=result.db('Database_1');
    let collection=db.collection('Problems');
    let response=await collection.find({}).toArray();
    console.log(response);
}

module.exports=getData;