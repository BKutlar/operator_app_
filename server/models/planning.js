const mongoose = require('mongoose');

const Planning = new mongoose.Schema({
    planningId : {type: Number},
    fleetId: {type: Number},
    evId: {type: Number},
    scheduling: {type: Number},
    recommandations: {type: String}
})

module.exports = mongoose.model('Planning', Planning);