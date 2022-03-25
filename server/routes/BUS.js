const express = require('express');
const router = express.Router();
const busesCopy = require('../models/buses')

router.post('/bus', async (request, response) => {
    const signedUpUser = new busesCopy({
        number: request.body.number,
        country: request.body.country,
        carbonIntensity: request.body.carbonIntensity,
        dailyCharging: request.body.dailyCharging,
        emission: request.body.emission,
        fleet: request.body.fleet
    })
    signedUpUser.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

router.get('/bus', async (request, response) => {
    const buses = await busesCopy.find({
        
    })
    
        return response.json({status:'ok', buses})
    
})

module.exports = router;