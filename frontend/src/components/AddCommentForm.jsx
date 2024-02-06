
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../reducers/authReducer';
import { addCommentThunk, blogSelector, getOneBlogThunk } from '../reducers/blogReducer';
import { toast } from 'react-toastify';

function AddCommentForm() {

    const dispatch = useDispatch();
    const { loggedInUser } = useSelector(authSelector);
    const { singleBlog } = useSelector(blogSelector);
    const [ commentContent , setCommentContent ] = useState('');
    
    const handlePostSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(addCommentThunk({id:singleBlog._id,content:commentContent}));
            if(result.payload.success){
                dispatch(getOneBlogThunk(singleBlog._id));
                toast.success('Your Comment Added !!!');
                setCommentContent('');
            }else{
                throw new Error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    return (
        <div className='w-full p-2 flex flex-col justify-around min-h-1/4 h-auto bg-white rounded shadow-lg'>
                <div className='w-full flex'>
                    <div className='w-[45px] h-[45px] rounded-full bg-red-500'>

                    </div>
                    <div className='ml-3 flex items-center'>
                        <div>{loggedInUser.name}</div>
                    </div>
                </div>
                
                <div className='w-full h-auto'>
                    <textarea
                        type="text"
                        placeholder='What are your thoughts?'
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                        className='w-full h-auto p-1 focus:outline-none' />    
                </div>
                
                <div className='w-full flex justify-end text-sm'>
                    <button className='mr-3'
                        onClick={() => setCommentContent('')}>
                        Cancel
                    </button>
                    <button className='w-1/5 bg-[#1a8917] h-[30px] rounded-full text-white'
                        onClick={handlePostSubmit}>
                        Post
                    </button>
                </div>
                
            </div>
    )
}

export default AddCommentForm