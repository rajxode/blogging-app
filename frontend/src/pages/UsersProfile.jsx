
import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { blogSelector } from '../reducers/blogReducer';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import Loader from '../components/Loader';
import ProfileMain from '../components/ProfileMain';
import ProfileAside from '../components/ProfileAside';

function UsersProfile() {

    const dispatch = useDispatch();

    const  { loading } = useSelector(blogSelector);
    const { isLoading, user } = useSelector(authSelector);

    useEffect(() => {
        dispatch(getLoggedInUserThunk());
    },[]);

    return (
        <>
        {
            isLoading || loading
            ?
            <Loader />
            :
            <div className='w-full px-[10%] pt-[3%] flex justify-between h-[80vh]'>
                <ProfileMain user={user} />
                <ProfileAside user={user} />
            </div>  
        }
        </>
    )
}

export default UsersProfile;