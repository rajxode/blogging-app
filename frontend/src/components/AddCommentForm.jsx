
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../reducers/authReducer';
import { addCommentThunk, blogSelector, getOneBlogThunk } from '../reducers/blogReducer';
import { toast } from 'react-toastify';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

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
        <Card className="w-full">
            <CardHeader>
                <CardTitle className='flex'>
                    <div className='w-[45px] h-[45px] rounded-full bg-red-500'>

                    </div>
                    <div className='ml-3 flex items-center'>
                        <div>{loggedInUser.name}</div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <Textarea 
                        type="text"
                        placeholder='What are your thoughts?'
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                        className='w-full h-auto p-1 border-none focus:outline-none' />  
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <button
                    className='mr-4 text-sm'
                    onClick={() => setCommentContent('')}>
                    Cancel
                </button>
                <Button
                    size="sm"
                    className="rounded-full bg-[#1a8917]"
                    onClick={handlePostSubmit}>
                    Publish
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AddCommentForm;