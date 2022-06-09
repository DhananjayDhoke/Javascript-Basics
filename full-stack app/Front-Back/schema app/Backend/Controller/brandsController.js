const express= require("express");
const { findOneAndUpdate } = require("../Model/brandsModel");

let  Brand = require("../Model/brandsModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const BrandData = await Brand.find().lean().exec();

          return res.send(BrandData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const BrandData = await Brand.create(req.body);

          return res.send(BrandData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const BrandData = await Brand.findById(req.params.id).lean().exec();

          return res.send(BrandData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const BrandData = await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(BrandData)
    }
    catch(e){
        return res.send(e.message)
    }
})


module.exports = router