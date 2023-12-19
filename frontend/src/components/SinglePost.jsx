import React from 'react';

function SinglePost(props) {

    const { image , heading , author , createdAt, content } = props.post;

    return (
        <div className='flex flex-col md:flex-row w-full min-h-[230px] h-auto my-2 justify-between'>
            <div className='md:h-full h-auto w-full md:w-[35%]'>
                <img src={image} alt="image" className='h-full w-full rounded'/>
            </div>
            <div className='flex flex-col w-full h-auto md:w-[62%] md:h-full justify-around'>
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