// backend/routes/receipt.js

const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const Hotel = require("../models/listing");
const User = require("../models/user");
const { userInfo } = require("os");


// GET receipt data by booking ID
router.get("/:id", async (req, res) => {
   
    try {
        const booking = await Booking.findById(req.params.id)
            .populate("user")
            .populate("hotel");
    
        // Ensure that booking is found
        console.log(booking.guests)
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
    
        // Ensure hotel and user data exists before accessing them
        if (!booking.hotel || !booking.user) {
            return res.status(400).json({ message: "Booking is missing hotel or user data" });
        }
    
        // Calculate duration in nights
        const startDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        const diffTime = Math.abs(endDate - startDate);
        const nights = Math.ceil(diffTime / (1000 * 3600 * 24));  // Convert time to days
    
        // Calculate the number of rooms based on the number of guests
        const roomCapacity = booking.hotel.roomCapacity || 2;  // Default to 2 guests per room if not provided
        const totalRooms = Math.max(1, Math.ceil(booking.guests / roomCapacity));  // Ensure at least one room is allocated
    
        // Calculate the total amount before any discount
        const totalAmountBeforeDiscount = booking.hotel.price * totalRooms * nights;  // Price per night * total rooms * nights
    
        // Discount logic based on stay duration (nights)
        let discount = 0;
        if (nights > 10) {
            discount = 0.3 * totalAmountBeforeDiscount;  // 30% discount for stays longer than 10 nights
        } else if (nights > 5) {
            discount = 0.2 * totalAmountBeforeDiscount;  // 20% discount for stays longer than 5 nights
        } else if (nights === 5) {
            discount = 0.1 * totalAmountBeforeDiscount;  // 10% discount for exactly 5-night stays
        }
    
        // Calculate final total amount after discount
        const totalAmount = totalAmountBeforeDiscount - discount;
    
        // Prepare the booking details to return in the response
        const bookingDetails = {
            bookingId: booking.id,
            user: {
                id: booking.user._id,
                name: booking.user.name,
                email: booking.user.email
            },
            hotel: {
                name: booking.hotel.title,
                location: booking.hotel.location,
                pricePerNight: booking.hotel.price,
                roomCapacity: booking.hotel.roomCapacity
            },
            stayDuration: {
                startDate: startDate.toISOString().split('T')[0],  // Format as yyyy-mm-dd
                endDate: endDate.toISOString().split('T')[0],  // Format as yyyy-mm-dd
                nights,
                guests: booking.guests,
                totalRooms  // Added totalRooms for clarity
            },
            totalAmountBeforeDiscount,
            discount,
            totalAmount
        };
        console.log(bookingDetails)
    
        // Send the response
        res.json({
            message: "Booking details retrieved successfully",
            bookingDetails
        });
    
    } catch (err) {
        console.error("Error fetching booking:", err);
        res.status(500).json({ message: "Server error" });
    }
    
});

module.exports = router;
