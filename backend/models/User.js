
const mongoose = require('mongoose');

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
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;