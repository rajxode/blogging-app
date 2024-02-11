
import React, { useEffect } from 'react';
import HomeBanner from '../components/HomeBanner';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';

function LandingPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(blogSelector);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      navigate('/home');
    }
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
          <MainContainer />
        </div>
      }
    </>
  )
}

export default LandingPage;