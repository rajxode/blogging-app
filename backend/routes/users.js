
// express
const express = require('express');

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

// export
module.exports = router;