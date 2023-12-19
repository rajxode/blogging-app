

import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';


function Profile() {

    const { user } = useSelector(authSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Profile | Blogging';
    },[]);

    useEffect(() => {
       dispatch(getLoggedInUserThunk()); 
    },[])

    return(
        <div>
            profile page
            { user.name }
        </div>
    )
}

export default Profile;