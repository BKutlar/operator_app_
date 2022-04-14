const express = require('express');
const router = express.Router();
const fleetCopy = require('../models/fleet');

router.post('/fleet', async (request, response) => {
    const Fleet = new fleetCopy({
        fleetId: request.body.fleetId,
        dailyConsumption: request.body.dailyConsumption,
        totalCapacity: request.body.totalCapacity
    })
    Fleet.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })

})

router.get('/fleet', async (request, response) => {
    const fleet = await fleetCopy.find({

    })

    return response.json({ status: 'ok', fleet });
})

module.exports = router;