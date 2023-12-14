
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.route('/create').post(userController.create);

module.exports = router;