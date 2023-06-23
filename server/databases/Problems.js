const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();

const DBConnection=async() =>{
   const MONGO_URL=process.env.MONGO_URL
   try {
      await mongoose.connect(MONGO_URL,{useNewUrlParser: true});  
      console.log("Database is Connected")
   } 
   catch (error) {
    console.log("Error while connecting to database")
   }
}

module.exports={DBConnection}
