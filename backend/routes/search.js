const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const listings = require('../models/listing')


router.get('/',async(req,res)=>{
    console.log("Request for city is reach to backend")
    console.log(req.query.city)
    try{
        const city = req.query.city;
        if(!city){
            return res.status(400).json({message :'City is required'})
        }
        // Case sensitive match for City
        const hotels = await listings.find({location:{ $regex: new RegExp(city, 'i') }});
        res.json(hotels);
        console.log(hotels);
    }
    catch(err){
        console.error('Error fetching hotels:', err);
    res.status(500).json({ message: 'Server error' });
    }
})
module.exports = router;