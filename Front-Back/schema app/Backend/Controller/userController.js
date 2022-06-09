const express= require("express");
const { findOneAndUpdate } = require("../Model/userModel");

let  User = require("../Model/userModel")




const router = express.Router()


router.get("",async(req,res)=>{

    try{
          const UserData = await User.find().lean().exec();

          return res.send(UserData)
    }
    catch(e){
        return res.send(e.message)
    }
})

router.post("/create",async(req,res)=>{

    try{
          const UserData = await User.create(req.body);

          return res.send(UserData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id",async(req,res)=>{

    try{
          const UserData = await User.findById(req.params.id).lean().exec();

          return res.send(UserData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.patch("/:id/edit",async(req,res)=>{

    try{
          const UserData = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

          return res.send(UserData)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.get("/:id/addreses",async(req,res)=>{

    try{
          const UserData = await User.findById(req.params.id).lean().exec();
          return res.send(UserData.Address)
    }
    catch(e){
        return res.send(e.message)
    }
})


router.post("/:id/addreses/create",async(req,res)=>{

         let street=req.body.street
        let city=req.body.city
       let  state=req.body.state
       let  pincode=req.body.pincode

    try{
          const UserData = await User.findByIdAndUpdate(req.params.id,{
              $push:{
               Address :{street,
                city,
                state,
                pincode}
              }
          });
        
          return res.send(UserData)
    }
    catch(e){
        return res.send(e.message)
    }
})


////////***** */
router.patch("/:id/addreses/edit",async(req,res)=>{

    try{
        const UserData = await User.findById(req.params.id).lean().exec();

        
  }
  catch(e){
      return res.send(e.message)
  }
})

module.exports = router