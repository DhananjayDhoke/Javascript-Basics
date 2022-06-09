const express= require("express");
const { findOneAndUpdate } = require("../Model/categreyModel");

let  Category = require("../Model/categreyModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const CategoryData = await Category.find().lean().exec();

          return res.send(CategoryData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const CategoryData = await Category.create(req.body);

          return res.send(CategoryData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const CategoryData = await Category.findById(req.params.id).lean().exec();

          return res.send(CategoryData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const CategoryData = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(CategoryData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id/addreses",async(req,res)=>{

    try{
          const CategoryData = await Category.findById(req.params.id).lean().exec();
          return res.send(CategoryData.Address)
    }
    catch(e){
        return res.send(e.message)
    }
})







module.exports = router