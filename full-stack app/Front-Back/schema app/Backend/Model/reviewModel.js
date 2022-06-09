

const mongoose =require ("mongoose");


const ReviewSchema = new mongoose.Schema({
    product_review:{type:String, required:true},
   
    product_id :{type:mongoose.Schema.Types.ObjectId, ref:"products"},
    user_id :{type:mongoose.Schema.Types.ObjectId, ref:"users"}
    
  
})


let Review = mongoose.model("reviews",ReviewSchema)

module.exports = Review