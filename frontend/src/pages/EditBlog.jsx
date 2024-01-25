
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { useParams , useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { useDispatch , useSelector } from 'react-redux';
import { blogSelector, updateBlogThunk } from '../reducers/blogReducer';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const initialState = {
  title:'',
  summary:'',
  file:'',
  content:null
}

function EditBlog() {

  const { id } = useParams();
  const { loading , singleBlog } = useSelector(blogSelector);
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    title:singleBlog.title,
    summary:singleBlog.summary,
    file:'',
    content:null
  });

  const dispatch = useDispatch();

  const [file,setFile] = useState(singleBlog.thumbnail.secure_url);
	const [content, setContent] = useState(singleBlog.content);

  useEffect(() => {
    document.title = 'Edit Blog | Medium'
  },[])
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!content){
      return;
    }
    formData.content = content;
    const result = await dispatch(updateBlogThunk({id:id,formData:formData}));
    
    if(result.payload){
      toast.success('Blog Updated !!!')
      setFormData({...initialState});
      setContent('');
      setFile(null);
      navigate(`/singleblog/${id}`);
    }
    else{
      toast.error(result.payload.message);
    }
    
  }

  const handleImageChange = (e) => {
    setFormData({...formData,file:e.target.files[0]})
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
    {
      loading
      ?
      <Loader />
      :
      <div className='w-full px-[10%] flex flex-col items-center pt-[3%] min-h-[90vh]'>
        
        <div className='w-full mt-2 flex justify-end'>
          <button 
            onClick={handleSubmit}
            className='px-4 py-1 bg-[#1a8917] text-white rounded-full'> 
            Update Blog
          </button>
        </div>

        <div className='w-full mt-2'>
          <input 
            type="text"
            placeholder='Title'
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData,title:e.target.value})}
            className='w-full focus:outline-none px-2 py-1 rounded h-[75px] text-5xl' />
        </div>
        
        <div className='w-full mt-2'>
          <label htmlFor="file" className='text-2xl font-semibold text-slate-400'>
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

        <div className='w-full mt-2'>
          <input 
            type="text"
            placeholder='Summary'
            required
            value={formData.summary}
            onChange={(e) => setFormData({...formData,summary:e.target.value})}
            className='w-full focus:outline-none px-2 py-1 rounded text-xl mb-2' />
        </div>
        
        <div className='w-full mt-2'>
          <ReactQuill
            className='overflow-auto'
            placeholder='Tell your story...'
            value={content}
            onChange={setContent}
            />
        </div>

      </div>
    }
    </>
  )
}

export default EditBlog;