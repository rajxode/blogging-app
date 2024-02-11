
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../reducers/authReducer';
import SettingsNavbar from '../components/SettingsNavbar';

function Settings() {

    const { loggedInUser } = useSelector(authSelector);

    return (
        <div className='px-[10%] mt-[5vh] flex flex-col justify-between h-[80vh]'>
            <div className='w-full h-1/5 px-3 py-2 rounded flex flex-col'>
                <div className='text-5xl font-semibold mb-5'>
                    { loggedInUser.name }
                </div>
                <SettingsNavbar />
            </div>
            <div className='w-full h-3/4 px-3'>
                <Outlet />
            </div>
        </div>
    )
}

export default Settings;