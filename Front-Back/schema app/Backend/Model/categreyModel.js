
const mongoose =require ("mongoose");


const CategorySchema = new mongoose.Schema({
  brand_name:{type:String, required:true},
  
  product_id :{type:mongoose.Schema.Types.ObjectId, ref:"products",required:true}



  
})


let Category = mongoose.model("categorys",CategorySchema)

module.exports = Category