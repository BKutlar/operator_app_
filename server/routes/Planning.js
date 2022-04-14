const express = require('express');
const router = express.Router();
const planningCopy = require('../models/planning');

router.post('/planning', async(request, response) => {
    const Planning = new planningCopy({
        planningId: request.body.planningId,
        fleetId: request.body.fleetId,
        evId: request.body.evId,
        scheduling: request.body.scheduling,
        recommandations: request.body.recommandations,
    })

    Planning.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error);
    })
})

router.get('/planning', async(request, response)=> {
    const planning = await planningCopy.find({

    })

    return response.json({status: 'ok', planning});
})

module.exports = router; 