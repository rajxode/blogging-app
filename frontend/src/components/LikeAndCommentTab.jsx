
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { blogSelector, getOneBlogThunk, toggleLikeThunk } from '../reducers/blogReducer';
import { authSelector } from '../reducers/authReducer';

function LikeAndCommentTab({showComments,setShowComments,comments,likes}) {

  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const { singleBlog } = useSelector(blogSelector);
  const [ isLiked, setIsLiked ] = useState(false);

  const checkIsLiked = () => {
    for(let i=0; i< likes.length; i++){
      if(likes[i].user === user._id){
        setIsLiked(true);
        return;
      }
    }
    setIsLiked(false);
    return;
  }

  useEffect(() => {
    checkIsLiked();
  },[]);

  const handleLikeClick = async(e) =>{
    try {
      e.preventDefault();
      const result = await dispatch(toggleLikeThunk(singleBlog._id));
      if(!result.payload.success){
        throw new Error(result.payload.message);
      } else {
        dispatch(getOneBlogThunk(singleBlog._id));
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  return (
      <div className='w-full flex justify-between items-center my-3 border-y py-2 text-xl px-2'>
        <div className='flex items-center'>
          <div className='cursor-pointer flex items-center'
              onClick={handleLikeClick}>
            <span>
              {
                isLiked
                ?
                <i class="fa-solid fa-heart"></i>
                :
                <i class="fa-regular fa-heart"></i>
              }
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