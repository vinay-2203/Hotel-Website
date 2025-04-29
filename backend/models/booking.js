const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  guests: Number,
  rooms: Number,
  startDate: Date,
  endDate: Date,
  isRedeemed: Boolean,
  isCounted: { type: Boolean, default: false }, // for increment tracking
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);