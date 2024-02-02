
import React from 'react'
import CommentListAndForm from './CommentListAndForm'

function CommentSection({showComments,setShowComments}) {
    
    return (
        <div className={`flex flex-col items-center fixed top-0 right-0 bg-white h-screen overflow-y-auto
            drop-shadow-2xl z-20 transition-all ease-in-out duration-300 ${showComments ? 'w-1/4' : 'w-0' }`}>
          <div className='w-full font-semibold text-slate-700 flex justify-between px-3 mt-3'>
            
            <div className='text-2xl'>
              Comments
            </div>
            <div className='text-xl'>
              <span className='cursor-pointer hover:bg-gray-200 px-2 rounded'
                onClick={() => setShowComments(false)}>
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
            
          </div>
          <div className='w-full h-full'>
            <CommentListAndForm />
          </div>
        </div>
    )
}

export default CommentSection;