
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { addBlogThunk } from '../reducers/blogReducer';


function AddBlog() {

  const [formData,setFormData] = useState({
    title:'',
    summary:'',
    file:'',
    content:null
  });

  const dispatch = useDispatch();

  const [file,setFile] = useState();
	const [content, setContent] = useState('');


  useEffect(() => {
    document.title = 'Add Blog | Medium'
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!content){
      return;
    }
    formData.content = content;
    dispatch(addBlogThunk(formData));
  }

  const handleImageChange = (e) => {
    setFormData({...formData,file:e.target.files[0]})
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className='w-full px-[10%] flex flex-col items-center pt-[3%] min-h-[90vh]'>
        <div className='w-full mt-2'>
            <input 
                type="text"
                placeholder='Title'
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData,title:e.target.value})}
                className='w-full focus:outline-none px-2 py-1 rounded h-[75px] text-5xl'/>
        </div>
        <div className='w-full mt-2'>
            <label htmlFor="file">
              <span className='text-3xl font-semibold px-2 text-slate-400 cursor-pointer'><i class="fa-solid fa-circle-plus"></i></span>
            </label>
            <input 
                    type="file"
                    id="file"
                    name='file'
                    required
                    onChange={handleImageChange}
                    className='w-full focus:outline-none px-2 py-1 rounded hidden'/>
            <img src={file} />
        </div>
        <div className='w-full mt-2'>
            <input 
                    type="text"
                    placeholder='Summary'
                    required
                    value={formData.summary}
                    onChange={(e) => setFormData({...formData,summary:e.target.value})}
                    className='w-full focus:outline-none px-2 py-1 rounded text-xl mb-2'/>
        </div>
        <div className='w-full mt-2 z-0'>
            <ReactQuill
              theme='snow'
              placeholder='Tell your story...'
              value={content}
              onChange={setContent}
              />
        </div>
        <div className='w-full mt-2 flex justify-center'>
          <button 
            onClick={handleSubmit}
            className='px-4 py-1 bg-[#1a8917] text-white rounded-full'> 
            Publish
          </button>
        </div>
        
    </div>
  )
}

export default AddBlog;