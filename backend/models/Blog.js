
// mongoose
const mongoose = require('mongoose');

// schema
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , 'Please enter Title for blog']
    },
    summary:{
        type:String,
        required:[true,'Enter a summary of blog']
    },
    content:{
        type:String,
        required:[true,'Enter a summary of blog']
    },
    thumbnail:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    createdAt:{
        type:String,
        required:[true,'Please provide creation time']
    }
});

// model
const Blog = mongoose.Schema('Blog',blogSchema);

module.exports = Blog;