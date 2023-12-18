
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



module.exports.login = async(req,res) => {
    try {

        const { email , password } = req.body.formData;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                error:"User doesn't Exists"
            });
        }

        const found = await bcryptjs.compare(password,user.password);

        if(!found){
            return res.status(401).json({
                error:"Wrong email / password"
            });
        }

        const token = jwt.sign(
                        {id:user._id},
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.TOKEN_EXPIRY
                        }
                    );
        
        const cookieOption = {
            // time in which the cookie will expire
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000
            ),
            // for backend only
            httpOnly: true,
        };
        
        user.password = undefined;

        return res.status(200).cookie('token',token,cookieOption).json({
            success:true,
            user,
            token
        })

    } catch (error) {
        
        return res.status(500).json({
            error:error.message
        })
    }
}