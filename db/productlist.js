require("dotenv").config();

const connectDB = require('../db/connect')
const Product = require('../models/schema')
const Productvalue = require("../data.json")

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(Productvalue);
        console.log('value add')
    }
    catch(error){
        console.log('error in work', error);
    }
}

start();