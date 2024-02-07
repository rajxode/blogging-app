
import React, { useEffect } from 'react';
import BlogList from '../components/BlogList';
import HomeBanner from '../components/HomeBanner';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';
import Aside from '../components/Aside';

function LandingPage() {

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
          <div className="w-full flex justify-between items-start px-[2%] md:px-[10%] py-[5vh]">
              <div className='w-full md:w-3/5'>
                <BlogList />
              </div>
              <Aside />
          </div>
        </div>
      }
    </>
  )
}

export default LandingPage;