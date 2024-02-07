
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../reducers/authReducer';
import { blogSelector } from '../reducers/blogReducer';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

function MyLibrary() {

  const { loggedInUser } = useSelector(authSelector);
  const { blogs } = useSelector(blogSelector);

  if(loggedInUser.savedBlogs.length === 0){
    return(
      <div className='w-full flex justify-center items-center text-xl font-semibold h-full'>
        <span>
          Nothing in Your Libary, 
        </span>
        &nbsp;
        <Link to='/home'
          className='text-[#6eb46c] hover:text-[#1a8917] hover:underline underline-offset-1'>
          add now
        </Link>
      </div>
    )
  }

  return (
    <div>
      {
        blogs
        .filter((blog) => loggedInUser.savedBlogs.includes(blog._id))
        .map((post) => <BlogCard
                          key={post._id} 
                          post={post} /> 
        )
      }
    </div>
  )
}

export default MyLibrary;