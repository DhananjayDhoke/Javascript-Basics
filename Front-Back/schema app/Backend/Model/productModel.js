
const mongoose =require ("mongoose");


const ProductSchema = new mongoose.Schema({
    product_name:{type:String, required:true},
   
    category_id :{type:mongoose.Schema.Types.ObjectId, ref:"category"}
  
})


module.exports = mongoose.model("products",ProductSchema)

 