const mongoose = require('mongoose')
const dotenv= require('dotenv')
const connectToDB = async()=>
{
    const url = process.env.MONGO_URI;
    mongoose.connect(url).then(()=>{
        console.log("Connected To DB")
    })
}
module.exports= connectToDB;