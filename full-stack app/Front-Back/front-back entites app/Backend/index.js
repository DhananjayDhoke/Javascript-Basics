const express = require("express")

const cors =require("cors")

const mongoose =require("mongoose");

const app = express();
app.use(express.json())
app.use(cors())
const connect = ()=>{
    return mongoose.connect("mongodb+srv://dhananjay:d123456789@cluster0.1hloyjg.mongodb.net/?retryWrites=true&w=majority")
}

app.listen(5000,async(req,res)=>{
    try{
        await connect()
        console.log("listning on port")
    }
    catch(e){
        console.log(e.message)
    }
})

// schema 

const ResSchema = new mongoose.Schema({
   
    image:{type:String},
    name:{type:String},
    category: {type:String},
    price: {type:Number},
    description:{type:String}
})

// model 

const  ResData = mongoose.model("ResData",ResSchema);

// app.get("/res",async(req,res)=>{
//     try{
//     const data = await ResData.find().lean().exec();

//      return res.json(data)
//     }
//     catch(e){
//      console.log(e.message)
//     }
// })

app.post("/res",async(req,res)=>{
    try{
    const data = await ResData.create(req.body);

    res.json(data)
    }
    catch(e){
     console.log(e.message)
    }
})


// pagination 




app.get("/res",async(req,res)=>{

    
    try{

    const page = req.query.page || 1;
    const size = req.query.size || 3;
    const data = await ResData.find().skip((page-1)*size).limit(size).lean().exec();

    const totalPage = Math.ceil((await ResData.find().countDocuments())/size)

     return res.send({data,totalPage})
    }
    catch(e){
     console.log(e.message)
    }
})

// sorting 

app.get("/res/sort",async(req,res)=>{
    let asc=1
    let dsc=-1
    try{
    const data = await ResData.find().sort({price:asc}).lean().exec();
 // console.log(data)
     return res.json(data)
    }
    catch(e){
     console.log(e.message)
    }
})

// filtering 
 
app.get(`/res/filter`,async(req,res)=>{
    //let pricelessthan=50

   // let pricegreterthan=50
    
    try{
    const data = await ResData.find({category:{$eq:"evening"}});
 
     return res.send(data)
    }
    catch(e){
     console.log(e.message)
    }
})


