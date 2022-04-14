const express = require('express');
const router = express.Router();
const bookingCopy = require('../models/booking');

router.post('/booking', async(request, response)=> {
    const Booking = new bookingCopy({

        bookingId: request.body.bookingId,
        chargingPointId: request.body.chargingPointId,
        payment: request.body.payment,
        timestart: request.body.timestart,
        timeoff: request.body.timeoff
    })

    Booking.save()
    .then(data => {
        response.json(data);
    })
    .catch(error => {
        response.json(error);
    })
})

router.get('/booking', async(request, response) => {
    const booking = await bookingCopy.find({

    })

    return response.json({status: 'ok', booking})
})

module.exports = router;