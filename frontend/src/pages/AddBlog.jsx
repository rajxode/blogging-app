import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function AddBlog() {
  return (
    <div className='w-full px-[5%] flex flex-col items-center pt-[3%] min-h-[92vh]'>
        <div className='w-full mt-2'>
            <input 
                type="text"
                placeholder='Title'
                className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <input 
                    type="file"
                    className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <input 
                    type="text"
                    placeholder='Summary'
                    className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <ReactQuill className='h-full'/>
        </div>
    </div>
  )
}

export default AddBlog