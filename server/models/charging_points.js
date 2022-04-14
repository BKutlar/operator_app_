const mongoose = require('mongoose');

const ChargingPoints = new mongoose.Schema({
    chargingpointid: {type: Number},
    chargingpointnumber: {type: Number},
    availability: {type: Boolean},
    typeofcharge: {type: String},
    chargingproduced: {type: String},
    timeon: {type: String /* Number or Boolean*/},
    timeoff: {type: String /*Number or Boolean*/}
})

module.exports = mongoose.model('ChargingPoints', ChargingPoints);