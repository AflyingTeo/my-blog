const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const loginCheck = require('../middleware/login.middleware');


//REGISTER
router.post('/register', authController.register);
//LOGIN
router.post('/login', loginCheck, authController.login);

module.exports = router;
