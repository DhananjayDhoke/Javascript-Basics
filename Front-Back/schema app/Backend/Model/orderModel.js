
const mongoose =require ("mongoose");


const OrderSchema = new mongoose.Schema({
    product_order:{type:String, required:true},
   
    product_id :{type:mongoose.Schema.Types.ObjectId, ref:"products"},
    user_id :{type:mongoose.Schema.Types.ObjectId, ref:"users"}
    
  
})


module.exports  = mongoose.model("orders",OrderSchema)

