
import BlogCard from './BlogCard';
import { blogSelector } from '../reducers/blogReducer';
import { useSelector } from 'react-redux';
import Aside from './Aside';



function BlogList() {

  const { blogs } = useSelector(blogSelector);

  return (
    <div className='w-full flex justify-between items-start px-[10%] py-[5vh]'>
      <div className='w-3/5 flex flex-col justify-between items-center'>
        { blogs.map((post) => <BlogCard key={post._id} post={post} />)}
      </div>
      
      <Aside />
    </div>  
  )
}

export default BlogList;