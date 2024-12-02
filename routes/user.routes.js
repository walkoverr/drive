const express = require('express')
const user= require('../models/user.model')
const mongoose = require("mongoose")
const router = express.Router();
const{body, validationResult}= require('express-validator')

router.get('/home',(req,res)=>{
    res.render("home")
})
router.get('/register',(req,res)=>{
    res.render('register');
})
router.post('/register',
    body('email').trim().isEmail().isLength({min:13}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3})
,(req,res)=>{
    const error = validationResult(req);
    
    if(!error.isEmpty())
    {
        return res.status(400).json({
            error:error.array(),
            message:"invalid "
        })
    }  
    // console.log(req.body)
    // res.send('user registered')
    const {email,username,password}= req.body
    const newUser = user.create({
        email:email,
        username:username,
        password:password,
    })
    res.json(newUser);
})  
module.exports= router;