const express = require('express');
const router = express.Router();
const ChargingStationCopy = require('../models/charging_stations');

router.post('/charging_stations', async (request, response) => {
    const ChargingStations = new ChargingStationCopy({
        chargingStationsId: request.body.chargingStationsId,
        location: request.body.location,
        price: request.body.price,
        footprintPerKwh: request.body.footprintPerKwh
    })
    ChargingStations.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

router.get('/charging_stations', async (request, response) => {
    const chargingstations = await ChargingStationCopy.find({

    })

    return response.json({ status: 'ok', chargingstations });
})

module.exports = router;