
import React, { useEffect } from 'react';
import Posts from '../components/Posts';
import HomeBanner from '../components/HomeBanner';

function Home() {

  useEffect(() => {
    document.title = 'Medium';
  },[]);

  return (
    <div className='w-full'>
      <HomeBanner />
      <Posts />
    </div>
  )
}

export default Home;