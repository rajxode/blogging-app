
import SinglePost from './SinglePost';
import { blogSelector } from '../reducers/blogReducer';
import { useSelector } from 'react-redux';

const category = ['Programming','Data Science','Technology','Self Improvement','Writing','Relationships','Machine Learning','Productivity','Politics'];

function Posts() {

  const { blogs } = useSelector(blogSelector);

  return (
      <div className='w-full flex justify-between items-start px-[10%] py-[5vh]'>
        <div className='w-3/5 flex flex-col justify-between items-center'>
          { blogs.map((post) => <SinglePost key={post._id} post={post} />)}
        </div>
        <div className='w-1/3 flex flex-col justify-between sticky top-[15vh]'>
          <div>
            <h1 className='font-bold'>
              Discover more of what matters to you
            </h1>
            <div className='w-full mt-4 flex justify-start flex-wrap px-2'>
              {
                category.map((cat,i) => <div key={i} className='px-4 py-2 rounded-full bg-gray-100 my-1 mx-2 text-sm'>{cat}</div>)
              }
            </div>
          </div>
        </div>
      </div>  )
}

export default Posts;