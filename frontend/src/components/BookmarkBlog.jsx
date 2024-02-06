
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import { toggleSaveBlogThunk } from '../reducers/blogReducer';

function BookmarkBlog({id}) {
    
    const dispatch = useDispatch();
    const { loggedInUser } = useSelector(authSelector);

    const handleSaveClick = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(toggleSaveBlogThunk(id));
            if(!result.payload.success){
                throw new Error(result.payload.message);
            }
            else{
                dispatch(getLoggedInUserThunk());
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div>
            <span className='cursor-pointer' 
                onClick={handleSaveClick} >
                    {
                        loggedInUser.savedBlogs.includes(id)
                        ?
                        <i class="fa-solid fa-bookmark"></i>
                        :
                        <i class="fa-regular fa-bookmark"></i>
                    }
            </span>
        </div>
    )
}

export default BookmarkBlog;