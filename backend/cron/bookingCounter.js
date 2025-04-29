const cron = require('node-cron');
const Booking = require('../models/booking');
const listings = require('../models/listing');

// This cron job runs every day at midnight
cron.schedule('0 0 * * *', async () => {
    try {
        // Get all bookings that have not been counted yet and are completed (stay has ended)
        const bookings = await Booking.find({ isCounted: false });

        bookings.forEach(async (booking) => {
            const currentDate = new Date();
            const endDate = new Date(booking.endDate);

            // If the booking's end date is before the current date (i.e., stay has ended)
            if (currentDate >= endDate) {
                const hotel = await listings.findById(booking.hotel);
                if (!hotel) {
                    console.error("Hotel not found for booking");
                    return;
                }

                // Increase the hotel room count by the number of rooms booked
                hotel.count += booking.rooms;

                // Save the updated hotel room count
                await hotel.save();

                // Mark the booking as "counted" to prevent this operation from happening again
                booking.isCounted = true;
                await booking.save();

                console.log(`Room count updated for hotel ${hotel.name} after booking ${booking._id} ended.`);
            }
        });
    } catch (err) {
        console.error("Error in cron job", err);
    }
});
