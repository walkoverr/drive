const express = require('express')

const router = express.Router();

router.get('/test',(req,res)=>{
    res.send("i am testing my route")
})

module.exports= router;