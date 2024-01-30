
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneBlogThunk } from '../reducers/blogReducer';
import { format } from 'date-fns';

function BlogCard(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const { title, summary, thumbnail, createdAt, user, _id, tags } = props.post;

    const handleClick = (e) => {
        e.preventDefault();
        const id = _id;
        dispatch(getOneBlogThunk(id));
        navigate(`/singleblog/${_id}`)
    }

    return (
        <div className='flex flex-col md:flex-row w-full min-h-[175px] my-2 justify-between pb-3 border-b'>
            <div className='flex flex-col w-full h-auto md:w-[62%] md:h-full justify-start'>
                
                <div className='w-full text-sm font-semibold'>
                    { user.name } &#8729; {format(new Date(createdAt), 'MMM d, yyyy')}
                </div>
                
                <div className='w-full text-2xl font-bold cursor-pointer mt-2'
                    onClick={handleClick}>
                    {title}
                </div>
                
                <div className='w-full text-slate-600 text-ellipsis mt-1'>
                    { summary }
                </div>

                <div className='w-full flex mt-2 justify-between'>
                    <div className='flex'>
                        <div className='px-2 text-sm bg-[#ebebeb] text-slate-500 mx-1 rounded-full'>
                            {tags[0]}
                        </div>
                    </div>
                    <div>
                        <i class="fa-regular fa-bookmark"></i>
                        {/* <i class="fa-solid fa-bookmark"></i> */}
                    </div>
                </div>
            </div>
            <div className='md:h-full h-auto w-full md:w-[35%] cursor-pointer'
                onClick={handleClick}>
                <img src={thumbnail.secure_url} alt="image" className='h-full w-full rounded'/>
            </div>
        </div>
    )
}

export default BlogCard;