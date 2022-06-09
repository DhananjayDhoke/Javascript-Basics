const express= require("express");
const { findOneAndUpdate } = require("../Model/OrderModel");

let  Order = require("../Model/orderModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const OrderData = await Order.find().lean().exec();

          return res.send(OrderData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const OrderData = await Order.create(req.body);

          return res.send(OrderData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const OrderData = await Order.findById(req.params.id).lean().exec();

          return res.send(OrderData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const OrderData = await Order.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(OrderData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id/addreses",async(req,res)=>{

    try{
          const OrderData = await Order.findById(req.params.id).lean().exec();
          return res.send(OrderData.Address)
    }
    catch(e){
        return res.send(e.message)
    }
})


module.exports = router