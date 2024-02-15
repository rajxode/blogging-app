
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cloudinary = require('cloudinary').v2;

// create a new user
module.exports.create = async(req,res) => {
    try {

        // user's data
        const { name , email , password } = req.body.formData;

        if(!name || !email || !password){
            return res.status(400).json({
                error:'Please enter all the values'
            });
        }

        // check whether the user already exist or not
        const userExist = await User.findOne({email});

        // if user exists
        if(userExist){
            return res.status(400).json({error:'User already Exists'});
        }

        // encrypt user's password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        // create a new user
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        // return response
        return res.status(201).json({
            success:true
        })

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}


// for logging in user
module.exports.login = async(req,res) => {
    try {
        // user's data
        const { email , password } = req.body.formData;

        if(!email , !password){
            return res.status(400).json({
                error:'Please enter all the values'
            });
        }

        // find user
        const user = await User.findOne({email});

        // if user not found
        if(!user){
            return res.status(400).json({
                error:"User doesn't Exists"
            });
        }

        // if user found, then check password
        const found = await bcryptjs.compare(password,user.password);

        // if password doesn't match
        if(!found){
            return res.status(401).json({
                error:"Wrong email / password"
            });
        }

        // if password matches
        // create jwt token
        const token = jwt.sign(
                        {id:user._id},
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.TOKEN_EXPIRY
                        }
                    );
        
        // cookie option for storing the token
        const cookieOption = {
            // time in which the cookie will expire
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000
            ),
            // for backend only
            httpOnly: true,
        };
        
        user.password = undefined;

        // return response
        return res.status(200).cookie('token',token,cookieOption).json({
            success:true,
            user,
            token
        })

    } catch (error) {
        // return response
        return res.status(500).json({
            error:error.message
        })
    }
}


// for logging out user
module.exports.logout = async(req,res) => {
    try {
        // remove the cookie
        res.cookie('token',null,{
            expires: new Date(
                Date.now()
            ),
            httpOnly: true,
        });

        // return response
        return res.status(200).json({
            success:true,
        });

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

// return user's data
module.exports.myData = async(req,res) => {
    try {
        // get loggedIn user's data
        const user = req.user;

        user.password = undefined;

        // return the data
        return res.status(200).json({
            success:true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


module.exports.updateMyData = async(req,res) => {
    try {
        const { _id, email } = req.user;
        let newData = {
            name:req.body.name,
            email:req.body.email,
            bio:req.body.bio
        };

        if(email !== newData.email){
            const emailExist = await User.findOne({email:newData.email});

            if(emailExist){
                throw new Error('Email Already exist, check again !!!');
            }
        }

        if(req.file){

            const { path } = req.file;

            // upload file on cloudinary
            const result = await cloudinary.uploader.upload(path,{
                folder:'Medium/users'
            });

            newData.avatar = {
                id:result.public_id,
                secure_url:result.secure_url
            }
        }

        const user = await User.findByIdAndUpdate(
            _id,
            newData,
            {
                new:true,
                runValidators:true,
                useFindAndModify: false,
            }
        )

        user.password = undefined;

        return res.status(200).json({
            success:true,
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


module.exports.updatePassword = async(req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


module.exports.deleteMyAccount = async(req,res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}