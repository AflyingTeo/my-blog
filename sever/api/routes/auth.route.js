const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

//REGISTER
router.post('/register', authController.register);
//LOGIN

module.exports = router;
