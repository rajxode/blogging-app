
module.exports.addPost = async(req,res) => {
    try {
        
        const { title , summary , content , picture } = req.body;


        return res.status(201).json({
            success:true,
            message:'New Post Added'
        });

    } catch (error) {
        return res.status(501).json({
            error:'Internal Server Error'
        });
    }
}