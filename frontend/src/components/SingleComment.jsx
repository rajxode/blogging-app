
import React from 'react';

function SingleComment(props) {

    const { comment } = props;
    return (
        <div className='w-3/4 m-2 p-2 flex items-center h-[60px] border border-[#f0dab5] rounded bg-[#f7f7f7]'>
            <div className='w-[57px] bg-red-400 h-[55px] rounded-full'>

            </div>
            <div className='w-full h-[55px] ml-2 flex flex-col justify-between p-1'>
                <div>
                    {comment.content}
                </div>
                <div className='text-xs font-semibold text-[#ffb128]'>
                    {comment.name}, {comment.date}
                </div>
            </div>
        </div>
    )
}

export default SingleComment;
