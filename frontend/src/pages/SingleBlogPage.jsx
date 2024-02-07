
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, deleteBlogThunk, getOneBlogThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';
import { authSelector } from '../reducers/authReducer';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import CommentSection from '../components/CommentSection';
import LikeAndCommentTab from '../components/LikeAndCommentTab';

function SingleBlogPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, singleBlog } = useSelector(blogSelector);
  const { isLoading, loggedInUser } = useSelector(authSelector);
  const [ showEditMenu, setShowEditMenu ] = useState(false);
  const [ showComments, setShowComments ] = useState(false); 


  useEffect(() => {
    dispatch(getOneBlogThunk(id))
  },[]);

  useEffect(() => {
    document.title = singleBlog.title;
  },[]);

  const handleDelBlog = async(e) => {
    e.preventDefault();
    const result = await dispatch(deleteBlogThunk(id));

    if(result.payload){
      toast.success('Blog Deleted !!!')
      navigate('/home');
    }
    else{
      toast.error(result.payload.message);
    }
  }

  return (
    <>
    {
      loading || isLoading
      ?
      <Loader />
      :  
      <div className='w-full px-[2%] md:px-0 md:w-1/2 py-[3%] min-h-[92vh] flex flex-col mx-auto justify-between relative'>
        
        {
          showComments
          ?
          <div className='fixed top-0 left-0 w-screen h-full bg-gray-200 opacity-40'></div>
          :
          null
        }

        {/* if user is logged in and id of loggedin user and blog author's id matches */}
        {
          loggedInUser && ( loggedInUser._id === singleBlog.user._id )
          ?
          <div className='flex justify-end relative'>
            <span className='cursor-pointer px-2 py-[2px] rounded-full hover:bg-slate-200 text-lg 
              font-semibold text-slate-400 hover:text-black'
              onClick={(e) => setShowEditMenu(!showEditMenu) }>
                {
                  !showEditMenu
                  ?
                  <i class="fa-solid fa-ellipsis"></i>
                  :
                  <i class="fa-solid fa-xmark"></i>
                }
            </span>

            {
              showEditMenu
              ?
              <div className='absolute bg-[#f3f3f3] -bottom-11 right-6 w-[100px] min-h-[50px] flex 
                flex-col py-1 px-2 rounded shadow'>
                  
                  <Link to={`/editblog/${id}`}>
                    <button className='w-full text-left border-b border-gray-300'>
                      Edit
                    </button>
                  </Link>

                  
                  <button className='w-full text-left'
                    onClick={handleDelBlog}>
                    Delete
                  </button>
              
              </div>
              :
              null
            }
          </div>
          :
          null
        }

        <div className='w-full my-3 h-auto flex flex-col'>
          <h1 className="text-5xl font-bold">
            {singleBlog.title}
          </h1>
          <div className='text-xl my-3 font-semibold text-slate-500'>
            {singleBlog.summary}
          </div>
          <div className='my-3 font-semibold text-slate-500 flex'>
            <div className='w-[45px] h-[45px] rounded-full bg-red-400'>

            </div>
            <div className='ml-2 flex flex-col text-sm justify-center'>
              <div>{singleBlog.user.name}</div>
              <div>{format(new Date(singleBlog.createdAt), 'MMM d, yyyy')}</div>
            </div>
          </div>
        </div>

        <LikeAndCommentTab 
            showComments={showComments} 
            setShowComments={setShowComments} 
            comments={singleBlog.comments} 
            likes={singleBlog.likes} 
          />

        <div className='w-full flex justify-center items-center h-[65vh] my-3'>
            <img src={singleBlog.thumbnail.secure_url} alt="image" className='h-full w-auto rounded' />
        </div>

        <div dangerouslySetInnerHTML={{__html:singleBlog.content}} />

        <div className='w-full flex items-center my-3'>
          {
            singleBlog.tags.map((tag) => <div className='px-3 py-1 bg-[#f2f2f2] rounded-full mr-2'>{tag}</div>)
          }
        </div>

        <LikeAndCommentTab 
            showComments={showComments} 
            setShowComments={setShowComments} 
            comments={singleBlog.comments} 
            likes={singleBlog.likes} 
          />

        <CommentSection 
            showComments={showComments} 
            setShowComments={setShowComments} 
          />

      </div>
    }
    </>
  )
}

export default SingleBlogPage;