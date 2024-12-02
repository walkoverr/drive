const express = require('express')
const user= require('../models/user.model')
const mongoose = require("mongoose")
const router = express.Router();
const bcrypt = require("bcrypt")
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
,async(req,res)=>{
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
    const hashpass = await bcrypt.hash(password,10);
    const newUser =await user.create({
        email:email,
        username:username,
        password:hashpass,
    })
    console.log(newUser);
    res.json({newUser});
}) 

router.get('/loginpage',(req,res)=>
    {
        res.render("login");   
    })
router.post('/loginpage',async(req,res)=>
    {
        const {username,password}= req.body
        const exi =  await user.findOne({username:username})
        if(!exi)
        {
            return res.status(404).json({msg:"user not found pls register"});
        }
        // console.log(await bcrypt.hash(password,10))
        // console.log(exi.password)
       const  match = await bcrypt.compare(password,exi.password)
       console.log(match)
       if(!match){
        return res.status(404).json({msg:"pls give correct details"});
       }
        return res.render("home")
    })
module.exports= router;