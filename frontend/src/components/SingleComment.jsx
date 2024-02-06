
import { formatDistanceToNow } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../reducers/authReducer';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { blogSelector, deleteCommentThunk, getOneBlogThunk } from '../reducers/blogReducer';

function SingleComment(props) {

    const dispatch = useDispatch();
    const [ showDeleteMenu, setShowDeleteMenu ] = useState(false);
    const { loggedInUser } = useSelector(authSelector);
    const { singleBlog } = useSelector(blogSelector);
    const { comment } = props;
    

    const handleDeleteComment = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(deleteCommentThunk({id:comment._id}));
            if(result.payload){
                dispatch(getOneBlogThunk(singleBlog._id));
                toast.success('Comment Removed');
            } else {
                throw new Error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='w-full my-2 py-3 flex flex-col border-b text-sm'>
            <div className='w-full flex justify-between'>
                <div className='flex'>
                    <div className='w-[40px] bg-red-400 h-[40px] rounded-full'>
                    </div>

                    <div className='ml-3 flex flex-col justify-start'>
                        <div>
                            {comment.user.name}
                        </div>
                        <div className='text-sm text-slate-400'>
                            {formatDistanceToNow(comment.createdAt)} ago
                        </div>
                    </div>
                </div>

                <div>
                    {
                        comment.user._id === loggedInUser._id
                        ?
                        <div className='relative'>
                            <span className='text-lg text-gray-400 hover:text-black px-1 rounded-full cursor-pointer'
                                onClick={() => setShowDeleteMenu(!showDeleteMenu)} >
                                <i class="fa-solid fa-ellipsis"></i>
                            </span>
                            {
                                showDeleteMenu
                                ?
                                <button className='absolute top-5 right-0 px-3 py-[2px] shadow border rounded-sm border-gray-300'
                                    onClick={handleDeleteComment}>
                                    Delete
                                </button>
                                :
                                null
                            }                            
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            
            <div className='w-full mt-3 px-1'>
                {comment.content}
            </div>
        </div>
    )
}

export default SingleComment;
