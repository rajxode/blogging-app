
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../reducers/authReducer';

function ProfilePicture() {

    const { loggedInUser } = useSelector(authSelector);

    return(
        <>
            {
                loggedInUser.avatar
                ?
                <img src={loggedInUser.avatar.secure_url} 
                    alt="image"
                    className='w-full h-full' />
                :
                <img 
                    src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
                    alt='image' 
                     />
            }
        </>
    )
}

export default ProfilePicture;