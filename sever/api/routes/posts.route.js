const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');


//CREATE POST
router.post('/create', postController.postCreate);
// //UPDATE POST
router.put('/:id', postController.postUpdate);
//DELETE POST
router.delete('/:id', postController.postDelete);
//GET SIGLE POST
router.get('/:id', postController.postSingleGet);
//GET POST
router.get('/', postController.postGet);

module.exports = router;
