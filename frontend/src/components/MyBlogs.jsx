
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { blogSelector } from '../reducers/blogReducer';
import { authSelector } from '../reducers/authReducer';
import BlogCard from './BlogCard';

function MyBlogs() {

    const { blogs } = useSelector(blogSelector);
    const { loggedInUser } = useSelector(authSelector);

    return (
        <div>
            {
                blogs
                .filter((blog) => blog.user._id === loggedInUser._id )
                .map((post) => <BlogCard 
                                    key={post._id} 
                                    post={post} /> 
                                )
            }
        </div>
    )
}

export default MyBlogs;