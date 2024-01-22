
// express
const express = require('express');

// router
const router = express.Router();

// redirect to user's and blog's routes
router.use('/users',require('./users'));
router.use('/blogs',require('./blog'));

// export the router
module.exports = router;