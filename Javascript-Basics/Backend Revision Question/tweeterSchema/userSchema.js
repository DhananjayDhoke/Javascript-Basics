

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    
    name:{type:String, required :true},
    email:{type:String, required :true},
    password:{type:String, required :true},
    address :[
       {
        city: {type:String, required :true},
        state: {type:String, required :true},
        pincode: {type:Number, required :true}
       }
    ]
})


const User = mongoose.model("user",userSchema)