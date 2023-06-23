const mongoose=require("mongoose")

const fileScheman=new mongoose.Schema({
  Pid:{
    type:String,
    required:true
  },
  PS:{
    type:String,
    required:true
  },
  PD:{
    type:String,
    required:true
  },
  D:{
    type:String,
    required:true
  },
})

const File=new mongoose.model('file',fileScheman)

export default File;