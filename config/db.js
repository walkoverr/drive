const mongoose = require('mongoose')
const dotenv= require('dotenv')
function connectToDB()
{
    // const uri = process.env.MONGO_URI;
    // console.log(uri);
    // if(!uri)
    // {
    //     console.log("ERROR")
    //     process.exit(1);
    // }
    const uri = "mongodb://127.0.0.1/my-drive"
    mongoose.connect(uri).then(()=>{
        console.log("Connected To DB")
    })
}
module.exports= connectToDB;