
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
        required:[true,'Enter Content of the blog']
    },
    thumbnail:{
        // photo id in cloudinary
        id:{
            type:String,
        },
        // url from cloudinary
        secure_url:{
            type:String,
        }
    },
    // user who created the blog
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // tags for a blog
    tags:[
        {
            type:String
        }
    ],
    // comments on blog
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ],
    // likes on blog
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ],
},
{
    timestamps:true
}
);

// model
const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;