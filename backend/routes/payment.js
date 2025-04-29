const express = require('express');
const router = express.Router();
const listings = require('../models/listing')
const Booking = require('../models/booking')


router.post('/book', async (req, res) => {
    console.log("Request Achieved")
    console.log(req.body)
    try {
        const { code, hotelId, guests, nights,userId} = req.body;
        // const userId = req.userId;
        console.log("UserId",userId);
        // console.log(userId)
        if (code !== "FREESTAY2025") {
            return res.status(400).json({ message: "Invalid code" });
        }

        const hotel = await listings.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }

        const roomCapacity = hotel.roomCapacity || 2;
        const numberOfRooms = Math.ceil(guests / roomCapacity);

        if(hotel.count < numberOfRooms){
            return res.stauts(400).json({message:'Not enough rooms available'})
        }
        
        hotel.count = hotel.count-numberOfRooms;
        await hotel.save();

        const startDate = new Date();
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + nights);

        const detail = await Booking.create({
            user: userId, // use middleware auth if you have it
            hotel: hotelId,
            guests,
            rooms: numberOfRooms,
            startDate,
            endDate,
            isRedeemed: true,
            isCounted: false // 👈 important for cron
        });
        console.log(detail)


        res.status(200).json({ message: "Booking successful with redeem code!" ,bookingId:detail.id});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router
