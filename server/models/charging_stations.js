const mongoose = require('mongoose');

const ChargingStations =  new mongoose.Schema({
    chargingStationsId: {type : Number},
    location: {type: String},
    price: {type: Number},
    footprintPerKwh: {type: Number}
})

module.exports = mongoose.model('ChargingStations', ChargingStations);