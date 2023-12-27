
import React, { useState } from 'react';
import SingleComment from './SingleComment';

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

    const [ commentContent , setCommentContent ] = useState('');

    return (
        <div className='w-full mt-4 flex flex-col justify-between items-center 
                bg-[#f2f1eb] py-3 rounded shadow'>
            <div className='w-full flex flex-col justify-between items-center'>
                {
                    comments.map((comment,i) => <SingleComment key={i} comment={comment} />)
                }
            </div>
            <div className='w-full flex justify-center items-center'>
                <input 
                    type="text"
                    placeholder='Add a comment...'
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    required
                    className='w-[70%] h-[35px] p-1 focus:outline-none rounded-l border border-[#f7deb3]' />
                <button className='w-[5%] min-w-[60px] bg-[#ffb128] h-[35px] rounded-r text-white font-semibold'>
                    Post
                </button>
            </div>
        </div>
    )
}

export default Comments;