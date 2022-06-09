const express= require("express");
const { findOneAndUpdate } = require("../Model/productModel");

let  Product = require("../Model/productModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const ProductData = await Product.find().lean().exec();

          return res.send(ProductData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const ProductData = await Product.create(req.body);

          return res.send(ProductData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const ProductData = await Product.findById(req.params.id).lean().exec();

          return res.send(ProductData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const ProductData = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(ProductData)
    }
    catch(e){
        return res.send(e.message)
    }
})


module.exports = router