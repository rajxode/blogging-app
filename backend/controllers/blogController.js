
const Blog = require('../models/Blog');
const cloudinary = require('cloudinary').v2;
const Comment = require('../models/Comment');


// get list of all the blogs inside the database
module.exports.getBlogs = async(req,res) => {
    try {
        // get all blogs
        const blogs = await Blog.find({})
                        .populate('user', 'name email')
                        .sort({updatedAt : -1});

        // return response
        return res.status(200).json({
            success:true,
            blogs
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


// create a new blog 
module.exports.addBlog = async(req,res) => {
    try {

        // data from req.body
        const { title, summary, content, tags } = req.body;
        
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
            tags,
            // logged in user's id
            user:req.user._id
        })

        // return response
        return res.status(201).json({
            success:true
        });

    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


module.exports.getOneBlog = async(req,res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id)
                        .populate('user','name')
                        .populate({
                            path: 'comments',
                            populate: {
                                path: 'user',
                                model: 'User',
                                select: 'name email',
                            },
                        });

        if(!blog){
            return res.status(400).json({
                success:false,
                error:'Bad Request'
            })
        }

        return res.json({
            success:true,
            blog
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


module.exports.updateBlog = async(req,res) => {
    try {
        const { id } = req.params;
        const { title, summary, content } = req.body;
        let result;
        let newData;

        if(req.file){

            const oldBlog = await Blog.findById(id);
            const thumbnailId = oldBlog.thumbnail.id;
            await cloudinary.uploader.destroy(thumbnailId);

            const path = req.file;

            result = await cloudinary.uploader.upload(path,{
                folder:'Medium/blog'
            })
        }

        if(result){

            const thumbnail = {
                id:result.public_id,
                secure_url:result.secure_url
            }

            newData = {
                title,
                summary,
                content,
                thumbnail
            }
        }else{
            newData = {
                title,
                summary,
                content,
            }
        }
    

        const blog = await Blog.findByIdAndUpdate(
            id,
            newData,
            {
                new:true,
                runValidators:true,
                useFindAndModify: false,
            }
        );

        return res.status(200).json({
            success:true
        });

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


module.exports.removeBlog = async(req,res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);

        const thumbnailId = blog.thumbnail.id;

        await cloudinary.uploader.destroy(thumbnailId);

        await Blog.findByIdAndDelete(id);
        
        return res.status(200).json({
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })        
    }
}


module.exports.addComment = async(req,res) => {
    try {
        
        const { blogId } = req.params;
        const { content } = req.body;

        if(!content){
            throw new Error('Please enter valid comment');
        }

        const comment = await Comment.create({
            content,
            user:req.user._id,
            blog:blogId
        });

        const blog = await Blog.findById(blogId);

        blog.comments.push(comment._id);
        await blog.save(); 

        return res.status(201).json({
            success:true,
        })

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


module.exports.removeComment = async(req,res) => {
    try {
        const { blogId } = req.params;
        // const comment = 
        return res.status(201).json({
            success:true,
            blogId
        })

    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}


module.exports.toggleLike = async(req,res) => {
    try {
        const { blogId } = req.params;

        return res.status(200).json({
            success:true,
            blogId
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })     
    }
}