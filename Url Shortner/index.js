const express = require("express") ;
const mongoose = require("mongoose")

const shortUrl= require("./Model/SerchUrl")

mongoose.connect("mongodb://localhost/",{
    useNewUrlParser: true, useUnifiedTopology: true
})


const app=express();

app.set("view engine","ejs")
app.listen(process.env.PORT || 3000)

app.get("/", (req,res)=>{
    res.render("index");
})

app.post("/shortUrl", (req,res)=>{
    
})