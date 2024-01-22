
// express 
const express = require('express');
// multer for file upload
const multer = require('multer');
// upload folder for multer
const upload = multer({ dest: '/temp' })

// router
const router = express.Router();

// controller and middleware
const blogController = require('../controllers/blogController');
const { isLoggedIn } = require('../middleware/user');

// get list of blogs
router.route('/getblogs').get(blogController.getBlogs);
// add a new blog
router.route('/addblog').post(isLoggedIn,upload.single('file',1),blogController.addBlog);

// export router
module.exports = router;