const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const loginCheck = require('../middleware/login.middleware');


//UPDATE
router.put('/:id', userController.userUpdate);
//DELETE
router.delete('/:id', userController.userDelete);
//GET
router.get('/:id', userController.userGet);

module.exports = router;
