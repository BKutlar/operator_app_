const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
    bookingId: {type: Number},
    chargingPointId: {type: Number},
    payment: {type: Number},
    timestart: {type: Number},
    timeend: {type: Number}
})

module.exports = mongoose.model('Booking', Booking);