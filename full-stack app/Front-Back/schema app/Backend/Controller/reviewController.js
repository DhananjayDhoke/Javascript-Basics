const express= require("express");
const { findOneAndUpdate } = require("../Model/reviewModel");

let  Review = require("../Model/reviewModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const ReviewData = await Review.find().lean().exec();

          return res.send(ReviewData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const ReviewData = await Review.create(req.body);

          return res.send(ReviewData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const ReviewData = await Review.findById(req.params.id).lean().exec();

          return res.send(ReviewData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const ReviewData = await Review.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(ReviewData)
    }
    catch(e){
        return res.send(e.message)
    }
})





module.exports = router