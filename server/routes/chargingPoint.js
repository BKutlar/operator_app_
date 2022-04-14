const express = require('express');
const router = express.Router();
const chargingpointCopy = require('../models/charging_points');

router.post('/charging_points', async (request, response) => {
    const ChargingPoint = new chargingpointCopy({
        chargingpointid: request.body.chargingpointid,
        chargingpointnumber: request.body.chargingpointnumber,
        availability: request.body.availability,
        typeofcharge: request.body.typeofcharge,
        chargingproduced: request.body.chargingproduced,
        timeon: request.body.timeon,
        timeoff: request.body.timeoff
    })
    ChargingPoint.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

router.get('/charging_point', async (request, response) => {
    const chargingpoint = await chargingpointCopy.find({

    })

    return response.json({ status: 'ok', chargingpoint });
})

module.exports = router;
