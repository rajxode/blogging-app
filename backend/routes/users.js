
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const { isLoggedIn } = require('../middleware/user');

router.route('/create').post(userController.create);
router.route('/login').post(userController.login);

router.route('/logout').get(isLoggedIn, userController.logout);

router.route('/mydetails').get(isLoggedIn, userController.myData);

module.exports = router;