
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch , useSelector } from 'react-redux';
import { addBlogThunk, blogSelector } from '../reducers/blogReducer';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import TagInput from '../components/TagInput';
import ThumbnailUploader from '../components/ThumbnailUploader';

const initialState = {
  title:'',
  summary:'',
  file:'',
  content:null,
  tags:null
}

function AddBlog() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(blogSelector);

  const [formData,setFormData] = useState({
    title:'',
    summary:'',
    file:'',
    content:null,
    tags:null
  });

  const [file,setFile] = useState();
	const [content, setContent] = useState('');
  const [ tags , setTags ] = useState([]);

  useEffect(() => {
    document.title = 'Add Blog | Medium'
  },[]);


  const resetData = () => {
    setFormData({...initialState});
    setTags([]);
    setContent('');
    setFile(null);
  }

  const handleImageChange = (e) => {
    setFormData({...formData,file:e.target.files[0]})
    setFile(URL.createObjectURL(e.target.files[0]));
}


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!content){
      return;
    }
    formData.tags = tags;
    formData.content = content;
    const result = await dispatch(addBlogThunk(formData));
    
    if(result.payload){
      toast.success('New blog added !!!')
      resetData();
      navigate('/home');
    }
    else{
      toast.error(result.payload.message);
    }
  }

  return (
    <>
    {
      loading
      ?
      <Loader />
      :
      <div className='w-full px-[2%] md:px-[10%] flex flex-col items-center pt-[3%] min-h-[90vh]'>

        <div className='w-full flex justify-end'>
            <button 
              onClick={resetData}
              className='px-4 py-1 bg-[#e0e0e0] rounded-full mr-2'>
              Reset
            </button>

            <button 
              onClick={handleSubmit}
              className='px-4 py-1 bg-[#1a8917] text-white rounded-full'> 
              Publish
            </button>
        </div>
        
        <div className='w-full mt-2'>
          <input 
            type="text"
            placeholder='Title'
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData,title:e.target.value})}
            className='w-full focus:outline-none px-2 py-1 rounded h-[75px] text-3xl md:text-5xl' />
        </div>
        
        <ThumbnailUploader file={file} handleImageChange={handleImageChange} />

        <div className='w-full mt-2'>
          <input 
            type="text"
            placeholder='Summary'
            required
            value={formData.summary}
            onChange={(e) => setFormData({...formData,summary:e.target.value})}
            className='w-full focus:outline-none px-2 py-1 rounded text-lg md:text-xl mb-2' />
        </div>

        <TagInput tags={tags} setTags={setTags} />
        
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

export default AddBlog;