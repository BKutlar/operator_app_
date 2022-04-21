const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
    bookingId: {type: Number},
    chargingPointId: {type: Number},
    chargingStation: {type: String},
    typeOfCharging: {type: String},
    price: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    payment: {type: Number},
    timestart: {type: Number},
    timeend: {type: Number}
})

module.exports = mongoose.model('Booking', Booking);