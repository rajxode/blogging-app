

import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import Posts from '../components/Posts';
import Loader from '../components/Loader';


function Profile() {

    const { user , isLoading } = useSelector(authSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Profile | Blogging';
    },[]);

    useEffect(() => {
       dispatch(getLoggedInUserThunk());
    },[])

    return(
        <>
        {
            isLoading 
            ?
            <Loader />
            :
            <div className='w-full py-[2%] flex flex-col'>
                {/* <div className="w-full mb-5">
                    <h1 className='text-3xl font-bold text-center'>
                        Hello { user.name }, Your blogs
                    </h1>
                </div> */}
                <div className="w-full">
                    <Posts />
                </div>
            </div>
        }
        </>
    )
}

export default Profile;