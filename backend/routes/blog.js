
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

router.route('/comment/:id')
    .post(isLoggedIn,blogController.addComment)
    .delete(isLoggedIn,blogController.removeComment);

router.route('/togglelike/:blogId').get(isLoggedIn,blogController.toggleLike);
router.route('/saveblog/:blogId').get(isLoggedIn,blogController.toggleSaveBlog);

router.route('/:id')
        .get(blogController.getOneBlog)
        .put(isLoggedIn,upload.single('file',1),blogController.updateBlog)
        .delete(isLoggedIn,blogController.removeBlog);


// export router
module.exports = router;