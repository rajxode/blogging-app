
import React from 'react';

function LikeAndCommentTab({showComments,setShowComments,comments,likes}) {
    
    return (
        <div className='w-full flex justify-between items-center my-3 border-y py-2 text-xl px-2'>
          <div className='flex items-center'>
            <div className='cursor-pointer flex items-center'>
              <span>
                <i class="fa-regular fa-heart"></i>
                {/* <i class="fa-solid fa-heart"></i> */}
              </span>
              &nbsp;
              <span className='text-sm'>
                {likes.length}
              </span>
            </div>
            <div className='ml-5 flex items-center'
                onClick={() => setShowComments(!showComments)}>
              <span className='cursor-pointer'>
                <i class="fa-regular fa-comment"></i>
              </span>
              &nbsp;
              <span className='text-sm'>
              {comments.length}
              </span>
            </div>
          </div>

          <div>
            <i class="fa-regular fa-bookmark"></i>
            {/* <i class="fa-solid fa-bookmark"></i> */}
          </div>

        </div>
    )
}

export default LikeAndCommentTab;