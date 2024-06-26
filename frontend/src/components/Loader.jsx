
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-white opacity-95'>
      <RotatingLines
        visible={true}
        height="75"
        width="75"
        color="grey"
        strokeWidth="2"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader