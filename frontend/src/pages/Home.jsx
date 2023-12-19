
import React, { useEffect } from 'react';
import Posts from '../components/Posts';

function Home() {

  useEffect(() => {
    document.title = 'Blogging';
  },[]);

  return (
    <div className='w-full px-[5%] mt-[2%]'>
      <Posts />
    </div>
  )
}

export default Home;