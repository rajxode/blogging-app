
// mongoose 
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name']
    },
    email:{
        type:String,
        required:[true,'Please enter valid email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please enter password']
    },
    avatar:{
        // photo id in cloudinary
        id:{
            type:String,
        },
        // url from cloudinary
        secure_url:{
            type:String,
        }
    },
    savedBlogs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Blog'
        }
    ],
    bio:{
        type:String
    }
});

// Model
const User = mongoose.model('User',userSchema);

module.exports = User;