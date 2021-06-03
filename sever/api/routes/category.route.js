const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');


router.post('/', categoryController.categoryPost)
router.get('/', categoryController.categoryGet)

module.exports = router;
