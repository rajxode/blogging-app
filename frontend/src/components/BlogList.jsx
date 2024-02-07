
import BlogCard from './BlogCard';
import { blogSelector } from '../reducers/blogReducer';
import { useSelector } from 'react-redux';

function BlogList() {

  const { blogs } = useSelector(blogSelector);

  return (
    <div className='w-full flex flex-col justify-between items-center'>
      { blogs.map((post) => <BlogCard key={post._id} post={post} />)}
    </div>
  )
}

export default BlogList;