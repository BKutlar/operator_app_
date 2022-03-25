const mongoose = require('mongoose');

const Buses = new mongoose.Schema({
    number : {type: String},
    country: {type: String}, 
    carbonIntensity: {type: Number},
    dailyCharging: {type: Number},
    emission: {type: Number},
    fleet: {type: Number},
});

module.exports = mongoose.model('Buses', Buses)