const mongoose = require('mongoose');

const ElectricVehicles = mongoose.Schema({
    evId: { type: Number },
    batteryId: { type: Number },
    soc: { type: Number /*or String ? */ },
    typeOfCharge: { type: String },
    brand: { type: String },
    fleetId: { type: Number }
})

module.exports = mongoose.model('ElectricVehicles', ElectricVehicles);