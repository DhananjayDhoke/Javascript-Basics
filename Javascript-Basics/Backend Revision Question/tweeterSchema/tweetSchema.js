
const mongoose = require("mongoose");


const twitSchema = new mongoose.Schema({
    
  user_id :{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},

  body :{type:String, required:true}
})


const twit = mongoose.model("twit",userSchema)