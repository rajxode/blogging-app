
import React, { useEffect } from 'react';
import BlogList from '../components/BlogList';
import HomeBanner from '../components/HomeBanner';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';

function Home() {

  const dispatch = useDispatch();
  const { loading } = useSelector(blogSelector);

  useEffect(() => {
    document.title = 'Medium';
    dispatch(getAllBlogsThunk());
  },[]);

  return (
    <>
      {
        loading
        ?
        <Loader />
        :
        <div className='w-full'>
          <HomeBanner />
          <BlogList />
        </div>
      }
    </>
  )
}

export default Home;