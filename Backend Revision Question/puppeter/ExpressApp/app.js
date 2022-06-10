
const { default: axios } = require("axios");
const express = require("express")
const mongoose = require("mongoose")


const app= express();

app.use(express.json())

const connect =()=>{
    return mongoose.connect("http://mongodb+srv://dhananjay:dhananjay@cluster0.3ciwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

app.listen(8080,async()=>{
   try{
    await connect();
    console.log("listing on the port")
   }
   catch(e){
       console.log(e.message)
   }
})

const infoSchema= new mongoose.Schema({
    role:{type:String},
    company:{type:String},
    address:{type:String},


})

const Userinfo = mongoose.model("Userinfo",infoSchema);


app.get("/info",async(req,res)=>{
    
    try{
      const userdata = await Userinfo.find().exec().lean()
       
      res.send(userdata)

    }
    catch(e){
        console.log(e.message)
    }
})

app.post("/info",async(req,res)=>{
    
    try{
      const userdata = await Userinfo.create(req.body)
       
      res.send(userdata)

    }
    catch(e){
        console.log(e.message)
    }
})