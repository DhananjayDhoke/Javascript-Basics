
const express = require("express");
const mongoose =  require("mongoose");
const cors = require("cors")

const UserController = require("./Controller/userController")
const BrandsController = require("./Controller/brandsController")
const CategeoryController = require("./Controller/categeoryController")
//const OrderController = require("./Controller/orderController")
const ProductController = require("./Controller/productController")
const ReviewController = require("./Controller/reviewController")




const app = express();
app.use(cors())
app.use(express.json())
const connect = ()=>{
    return mongoose.connect("mongodb+srv://dhananjay:dhananjay@cluster0.3ciwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}


app.use("/users",UserController)
app.use("/brands",BrandsController)
app.use("/cetegorys",CategeoryController)
//app.use("/orders",OrderController)
app.use("/products",ProductController)
app.use("/reviews",ReviewController)




app.listen(5001,async()=>{
    try{
        await connect();
        console.log("port is ready")
    }
    catch(e){
        console.log(e.error)
    }
})


