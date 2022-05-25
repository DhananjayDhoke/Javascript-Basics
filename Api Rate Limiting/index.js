
const express = require("express")
const post= require("./data")
const app = express();

const ratelimit = require("express-rate-limit")

const limit = ratelimit({
     max:10,
     windowMs:1000*60,
})

app.get("/post",limit, (req,res)=>{
   
    res.send({
        status:"success",
        post:post
    })

})


app.listen(3000,()=>{
    console.log("listing on port 3000")
})