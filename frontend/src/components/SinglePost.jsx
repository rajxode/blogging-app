
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneBlogThunk } from '../reducers/blogReducer';
import { format } from 'date-fns';

function SinglePost(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const { title, summary, thumbnail, createdAt, user, _id } = props.post;

    const handleClick = (e) => {
        e.preventDefault();
        const id = _id;
        dispatch(getOneBlogThunk(id));
        navigate(`/singleblog/${_id}`)
    }

    return (
        <div className='flex flex-col md:flex-row w-full h-[175px] my-2 justify-between'
            onClick={handleClick}>
            <div className='flex flex-col w-full h-auto md:w-[62%] md:h-full justify-start'>
                
                <div className='w-full text-sm font-semibold'>
                    { user.name } &#8729; {format(new Date(createdAt), 'MMM d, yyyy')}
                </div>
                
                <div className='w-full text-2xl font-bold cursor-pointer my-2'>
                    {title}
                </div>
                
                <div className='w-full text-slate-600'>
                    { summary }
                </div>

            </div>
            <div className='md:h-full h-auto w-full md:w-[35%]'>
                <img src={thumbnail.secure_url} alt="image" className='h-full w-full rounded'/>
            </div>
        </div>
    )
}

export default SinglePost;