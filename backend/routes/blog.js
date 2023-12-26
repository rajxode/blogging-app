
const express = require('express');

const router = express.Router();

const blogController = require('../controllers/blogController');

router.route('/addpost').post(blogController.addPost);

module.exports = router;