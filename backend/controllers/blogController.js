
const Blog = require('../models/Blog');
const cloudinary = require('cloudinary').v2;

// get list of all the blogs inside the database
module.exports.getBlogs = async(req,res) => {
    try {
        // get all blogs
        const blogs = await Blog.find({});

        // return response
        return res.status(200).json({
            success:true,
            blogs
        })
    } catch (error) {
        return res.status(500).json({
            error:'Internal Server Error'
        })
    }
}


// create a new blog 
module.exports.addBlog = async(req,res) => {
    try {
        // data from req.body
        const { title , summary , content } = req.body;
        
        // if no thumbnail for blog is present
        if(!req.file){
            return res.status(400).json({
                error:'Please provide a thumbnail image for your blog'
            });
        }

        // get the path of thumbnail file
        const { path } = req.file;

        // upload file on cloudinary
        const result = await cloudinary.uploader.upload(path,{
            folder:'Medium/blog'
        });

        // store url from cloudinary
        const thumbnail = {
            id:result.public_id,
            secure_url:result.secure_url
        }

        // create blog from data
        const blog = await Blog.create({
            title,
            summary,
            content,
            thumbnail,
            // logged in user's id
            user:req.user._id
        })

        // return response
        return res.status(201).json({
            success:true,
            blog
        });

    } catch (error) {
        return res.status(501).json({
            error:'Internal Server Error'
        });
    }
}