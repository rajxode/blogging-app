
import React, { useState } from 'react';
import SingleComment from './SingleComment';
import { useSelector } from 'react-redux';
import { authSelector } from '../reducers/authReducer';

const comments = [
    {
        name:'ABC',
        content:'this is a comment by abc',
        date:'June 12, 2023'
    },
    {
        name:'DEF',
        content:'this is a comment by abc',
        date:'June 12, 2023'
    },
    {
        name:'GHI',
        content:'this is a comment by abc',
        date:'June 12, 2023'
    },
    {
        name:'JKL',
        content:'this is a comment by abc',
        date:'June 12, 2023'
    },
]

function Comments() {

    const { user } = useSelector(authSelector);
    const [ commentContent , setCommentContent ] = useState('');

    return (
        <div className='w-full mt-4 flex flex-col items-center 
                p-3 rounded h-full'>
            
            <div className='w-full p-2 flex flex-col justify-around h-1/4 bg-white rounded'>
                <div className='w-full flex'>
                    <div className='w-[45px] h-[45px] rounded-full bg-red-500'>

                    </div>
                    <div className='ml-3 flex items-center'>
                        <div>{user.name}</div>
                    </div>
                </div>
                
                <div className='w-full'>
                    <textarea
                        type="text"
                        placeholder='What are your thoughts?'
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                        className='w-[70%] h-[35px] p-1 focus:outline-none' />    
                </div>
                
                <div className='w-full flex justify-end text-sm'>
                    <button className='mr-3'>
                        Cancel
                    </button>
                    <button className='w-1/5 bg-[#1a8917] h-[30px] rounded-full text-white'>
                        Post
                    </button>
                </div>
                
            </div>

            <div className='w-full flex flex-col justify-between items-center'>
                {
                    comments.map((comment,i) => <SingleComment key={i} comment={comment} />)
                }
            </div>
        </div>
    )
}

export default Comments;