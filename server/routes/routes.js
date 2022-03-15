const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/user.model')
const bcrypt = require('bcrypt');

router.post('/signup',async (request, response) => {

    /* Crpted vesion */
    const saltPassword = await  bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        email: request.body.email,
        password: securePassword // no crypted request.body.password 
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error);
    })
})

module.exports = router;