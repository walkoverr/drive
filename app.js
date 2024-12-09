const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const indexrouter= require('./routes/index.routes')
const dotenv= require('dotenv')
dotenv.config();
const cookieParser= require('cookie-parser')
// app.use(cookieParser);
const connectToDB= require('./config/db')
connectToDB();
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',indexrouter)
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("port is listening")
})  