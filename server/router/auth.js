const express = require('express');
const router = express.Router();
const { findOne } = require('../model/userSchema');
// Use To Hash Password
const bcrypt = require("bcrypt");
// Use To Authenticate User 
const jwt = require('jsonwebtoken');

// Connect DB File 
require("../db/conn");
// Require userSchema File
const User = require("../model/userSchema");

// Middleware
const middleware = (req, res, next) =>{
    console.log("This is middleware");
    next();
}

// GET Routes
router.get('/', (req, res)=>{
    res.send("Hello World");
});

router.get('/about', middleware , (req, res)=>{
    res.send("Hello About Page");
})

// Registration Route Using Async
router.post('/register', async (req, res)=>{

    // Get User Data Using req.body 
    const { name, email, phone, work, password, cpassword} = req.body;

    // Check If Any Field Is Empty 
    if(!name || !email || !phone || !work || !password || !cpassword){
       return res.status(422).json({error: "Please Fill All The Fields Properly!"})
    }

    try {
        // Check Email Is Already Exist In Database Or Not 
        const userExist = await User.findOne({email});

        // If Email Exist Then Show Error 
        if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
        }else if(password != cpassword){
            return res.status(400).json({error: "Passwords Are Not Matching!"})
        }else{
            
        // If Email Not Exist Then Create New User 
        const user = new User({name, email, phone, work, password, cpassword});

        // Save The Data In Database
        await user.save();

        // Show This Message When User Data Is Stored Successfully
        res.status(201).json({message: "User Registered Successfully"});
        }
        
    } catch (error) {
        console.log(error);
    }
});

// Login Route Using Async

router.post('/login', async (req,res)=>{
    try {
        // Get User Data Using req.body 
        const {email , password} = req.body;

        // Check If Any Field Is Empty
        if(!email, !password){
            return res.status(400).json({error: "Please Fill The Data Properly!"});
        }

        // Check The Email Is Exists In Database Or Not 
        const userLogin = await User.findOne({email});

        // Check Password Is Matching Or Not And Email Is Exist Or Not
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // Get Generated Token From userSchema File Using generateAuthToken()
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                // To Expire Token After 30 Days 
                expires: new Date(Date.now()+ 25892000000), // 25892000000 Means 30Days
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials!"})
            }else{

            // If Email Exists Then Show This Message 
                res.json({message:"User Login Successfully"});
            }
        }else{
            res.status(400).json({error:"Invalid Credentials!"})
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;