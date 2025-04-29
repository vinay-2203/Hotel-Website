const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const listings = require('../models/listing')


//Sign Route
router.post('/signup',async(req,res)=>{
    const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    console.error('Signup Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
})

//Login route
router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid email or password'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid email or password'});
        }

        //creat JWT token
        const token = jwt.sign({user_Id:user._id},'secretkey',{expiresIn:'1h'});
        console.log("login successful for  ",email);
        console.log(user._id)
        res.status(200).json({success:true,message:'Login successful',token,email:user.email,userId: user._id, });
    } catch(err){
        console.error('Error in login:',err);
        res.status(500).json({message:'Server error'});
    }
})

// Hotel detail
router.get('/payment/:id',async(req,res)=>{
    try{
        const hotel = await listings.findById(req.params.id);
        if(!hotel){
            return res.status(400).json({message:"Hotel not found"});
        }
        res.json(hotel)
    } 
    catch(err){
        res.status(500).json({message:"Server error"})
    }
})

//Middleware Authentication
const authenticate = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.stauts(401).json({message:'Access denied, not token provided'});
    }
    try{
        const decoded = jwt.verify(token,'secretkey');
        req.user = decoded;
        next();
    }
    catch(err){
        return res.stauts(400).json({message:'Invalid token'});
    }
};

//Profile route
router.get('/profile',authenticate,async(req,res)=>{
    try{
        const user = await User.findById(req.user.user_Id).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json(user);
    }catch(err){
        console.error('Error fetching profile',err);
        res.status(500).json({message:'Server error'});
    }
});

module.exports = router;