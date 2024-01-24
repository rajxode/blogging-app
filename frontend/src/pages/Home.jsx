
import React, { useEffect } from 'react';
import Posts from '../components/Posts';
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
          <Posts />
        </div>
      }
    </>
  )
}

export default Home;