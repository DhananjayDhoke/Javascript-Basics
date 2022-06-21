const mongoose = require("mongoose");


const followerSchema = new mongoose.Schema({
    
  user_id :{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
  
  
   
})

const follower = mongoose.model("follower",userSchema)