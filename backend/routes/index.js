
const express = require('express');

const router = express.Router();

router.route('/').get((req,res) => {
    res.status(200).json({
        message:'Hello'
    })
})

router.use('/users',require('./users'));

module.exports = router;