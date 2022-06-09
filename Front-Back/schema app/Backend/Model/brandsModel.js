const mongoose =require ("mongoose");


 const BrandsSchema = new mongoose.Schema({
   brand_name:{type:String, required:true},
   
   product_id :{type:mongoose.Schema.Types.ObjectId, ref:"products"}



   
 })


let Brand = mongoose.model("brand",BrandsSchema)

module.exports = Brand