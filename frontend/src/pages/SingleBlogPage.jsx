
import React, { useEffect } from 'react';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, getOneBlogThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';
import { authSelector } from '../reducers/authReducer';
import { format } from 'date-fns';

function SingleBlogPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, singleBlog } = useSelector(blogSelector);
  const { isLoading } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getOneBlogThunk(id))
  },[]);

  return (
    <>
    {
      loading || isLoading
      ?
      <Loader />
      :  
      <div className='w-1/2 py-[3%] min-h-[92vh] flex flex-col mx-auto justify-between'>
          <div className='w-full my-3 h-auto flex flex-col'>
            <h1 className="text-5xl font-bold">
              {singleBlog.title}
            </h1>
            <div className='text-xl my-3 font-semibold text-slate-500'>
              {singleBlog.summary}
            </div>
            <div className='my-3 font-semibold text-slate-500'>
              {singleBlog.user.name}, {format(new Date(singleBlog.createdAt), 'MMM d, yyyy')}
            </div>
          </div>

          <div className='w-full flex justify-center items-center h-[65vh] my-3'>
              <img src={singleBlog.thumbnail.secure_url} alt="image" className='h-full w-auto rounded' />
          </div>

          <div dangerouslySetInnerHTML={{__html:singleBlog.content}} />

          <div className='w-full mt-2 flex flex-col justify-center items-center'>
            <div className='text-2xl font-semibold text-slate-700 underline'>
              Comments
            </div>
            <div className='w-full'>
              <Comments />
            </div>
          </div>
      </div>
    }
    </>
  )
}

export default SingleBlogPage;