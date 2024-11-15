const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
app.set("view engine","ejs");

app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log("port is listening")
})