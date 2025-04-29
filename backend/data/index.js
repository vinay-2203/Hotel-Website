const express = require('express');
const mongoose = require('mongoose');
const Listing = require('../models/listing');  // Import your Listing model
const listings = require('./data');  // Import your data from data.js
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Hotel-com');
}

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/addlisting',async(req,res)=>{
    try {
        await Listing.insertMany(listings);
        res.send('All listings added successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving listings');
    }
})



// Server listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
