import React from 'react';

function SinglePost(props) {

    const { image , heading , author , createdAt, content } = props.post;

    return (
        <div className='flex w-[85%] h-[230px] my-2 justify-between'>
            <div className='h-full w-[35%]'>
                <img src={image} alt="image" className='h-full w-full rounded'/>
            </div>
            <div className='flex flex-col w-[62%] h-full justify-around'>
                <div className='w-full text-2xl font-bold'>
                    {heading}
                </div>
                
                <div className='w-full text-slate-500 font-semibold'>
                    { author }, { createdAt }
                </div>
                
                <div className='w-full'>
                    { content }
                </div>
            </div>
        </div>
    )
}

export default SinglePost;