const express = require('express');
const router = express.Router();
const electricvehiclesCopy = require('../models/electric_vehicles');

router.post('/ev', async (request, response) => {
    const EV = new electricvehiclesCopy({
        evId: request.body.evId,
        batteryId: request.body.batteryId,
        soc: request.body.soc,
        typeOfCharge: request.body.typeOfCharge,
        brand: request.body.brand,
        fleetId: request.body.fleetId
    })

    EV.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

router.get('/ev', async (request, response) => {
    const ev = await electricvehiclesCopy.find({

    })

    return response.json({ status: 'ok', ev });
})

module.exports = router;
