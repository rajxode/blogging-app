
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function AddBlog() {

  const [data,setData] = useState({
    title:'',
    summary:'',
    thumbnail:'',
    content:''
  });

  const [content,setContent] = useState('');

  useEffect(() => {
    document.title = 'Add Blog | Blogging'
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content){
      return;
    }
    data.content = content;
    console.log(data);
  }

  return (
    <div className='w-full px-[5%] flex flex-col items-center pt-[3%] min-h-[92vh]'>
        <div className='w-full mt-2'>
            <input 
                type="text"
                placeholder='Title'
                required
                value={data.title}
                onChange={(e) => setData({...data,title:e.target.value})}
                className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <input 
                    type="file"
                    required
                    onChange={(e) => setData({...data,thumbnail:e.target.files[0]})}
                    className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <input 
                    type="text"
                    placeholder='Summary'
                    required
                    value={data.summary}
                    onChange={(e) => setData({...data,summary:e.target.value})}
                    className='w-full border focus:outline-none px-2 py-1 rounded'/>
        </div>
        <div className='w-full mt-2'>
            <ReactQuill
              value={content}
              onChange={setContent}
              />
        </div>
        <div className='w-full mt-2 flex justify-center'>
          <button 
            onClick={handleSubmit}
            className='px-2 py-1 bg-[#FFB534] text-white rounded'> 
            Publish Blog
          </button>
        </div>
    </div>
  )
}

export default AddBlog