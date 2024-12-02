const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const dotenv= require('dotenv')
const connectToDB= require('./config/db')
connectToDB();
dotenv.config();
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("port is listening")
})  