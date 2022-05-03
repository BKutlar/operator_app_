const mongoose = require('mongoose');

const Vehicles = new mongoose.Schema({
    number : {type: String},
    // country: {type: String},  create new model country
    // carbonIntensity: {type: Number},
    dailyCharging: {type: Number},
    emission: {type: Number},
    fleet: {type: String},
    //add TypeOfVehicles TypeOfconnector capacity

});

module.exports = mongoose.model('Vehicles', Vehicles)