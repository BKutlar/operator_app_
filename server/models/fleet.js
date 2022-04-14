const mongoose = require('mongoose');

const Fleet = new mongoose.Schema({
    fleetId: {type: Number},
    dailyConsumption: {type: Number},
    totalCapacity: {type: Number}
})

module.export = mongoose.model('Fleet', Fleet);