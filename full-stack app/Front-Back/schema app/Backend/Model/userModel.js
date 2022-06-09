
const mongoose =require ("mongoose");


 const UserSchema = new mongoose.Schema({
    first_name:{type: String,required:true},
    last_name:{type: String,required:true},


    Address:[ {
        street: String,
        city:String,
        state:String,
        pincode:String,
    }
    ]
   
 })


let User = mongoose.model("users",UserSchema)

module.exports = User