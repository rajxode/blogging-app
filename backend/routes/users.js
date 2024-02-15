
// express
const express = require('express');

// multer for file upload
const multer = require('multer');
// upload folder for multer
const upload = multer({ dest: '/temp' })

// router
const router = express.Router();

// controller and middleware
const userController = require('../controllers/userController');
const { isLoggedIn } = require('../middleware/user');

// router for signup, login, logout
router.route('/create').post(userController.create);
router.route('/login').post(userController.login);
router.route('/logout').get(isLoggedIn, userController.logout);
// for getting loggedin user's details
router.route('/mydetails').get(isLoggedIn, userController.myData);

router.route('/updatedetails').put(isLoggedIn,upload.single('file',1), userController.updateMyData);
router.route('/updatepassword').put(isLoggedIn, userController.updatePassword);
router.route('/deleteaccount').delete(isLoggedIn, userController.deleteMyAccount);

// export
module.exports = router;