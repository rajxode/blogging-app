

import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import Posts from '../components/Posts';
import Loader from '../components/Loader';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';


function Profile() {

    const { isLoading } = useSelector(authSelector);
    const { loading } = useSelector(blogSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Profile | Blogging';
    },[]);

    useEffect(() => {
       dispatch(getLoggedInUserThunk());
       dispatch(getAllBlogsThunk());
    },[])

    return(
        <>
        {
            isLoading || loading
            ?
            <Loader />
            :
            <div className='w-full py-[2%] flex flex-col'>
                <div className="w-full">
                    <Posts />
                </div>
            </div>
        }
        </>
    )
}

export default Profile;