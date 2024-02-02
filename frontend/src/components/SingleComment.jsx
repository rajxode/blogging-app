
import { formatDistance } from 'date-fns';
import React from 'react';

function SingleComment(props) {

    const { comment } = props;
    return (
        <div className='w-full my-2 py-3 flex flex-col border-b text-sm'>
            <div className='w-full flex'>
                <div className='w-[40px] bg-red-400 h-[40px] rounded-full'>
                </div>

                <div className='ml-3 flex flex-col justify-start'>
                    <div>
                        {comment.user.name}
                    </div>
                    <div className='text-sm text-slate-400'>
                        {formatDistance(comment.createdAt, new Date())} ago
                    </div>
                </div>
            </div>
            
            <div className='w-full mt-3 px-1'>
                {comment.content}
            </div>
        </div>
    )
}

export default SingleComment;
