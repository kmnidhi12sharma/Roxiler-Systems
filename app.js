require("dotenv").config();
const  express = require("express");
const app = express();
const connectDB =require('./db/connect')

const PORT = process.env.PORT || 5000;  //5000

const products_routes = require("./routes/product")


app.get("/",(req,res)=>{
    res.send("express page")
})

//app.use("/api/product")

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
           console.log( 'Port connected');
        })
    }
    catch(error){
        console.log('error in work', error);
    }
}

start();