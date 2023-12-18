

import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../reducers/authReducer';


function Profile() {

    const { user } = useSelector(authSelector);

    return(
        <div>
            { user.name }
        </div>
    )
}

export default Profile;