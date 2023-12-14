
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.create = async(req,res) => {
    try {

        const { name , email , password } = req.body.formData;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({error:'User already Exists'});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:'user created',
            user
        })


    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}