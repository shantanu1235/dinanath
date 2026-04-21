const express = require('express');
const { contect, signup, login } = require('../Controllers/Controller');

const routes=express.Router()

routes.post('/contact-us',contect)
routes.post('/signup',signup)      
routes.post('/login',login)         

module.exports=routes