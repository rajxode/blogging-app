import React from 'react'

function ThumbnailUploader({file,handleImageChange}) {

    return (
        <div className='w-full mt-2 h-auto'>
          <label htmlFor="file" className='text-lg md:text-2xl font-semibold text-slate-400'>
            <span className=' px-2 cursor-pointer'><i class="fa-solid fa-circle-plus"></i></span> Add a thumbnail
          </label>
          <input 
            type="file"
            id="file"
            name='file'
            required
            onChange={handleImageChange}
            className='w-full focus:outline-none px-2 py-1 rounded hidden'/>
          <div className='w-full flex justify-center'>
            <img src={file} />
          </div>
        </div>
    )
}

export default ThumbnailUploader