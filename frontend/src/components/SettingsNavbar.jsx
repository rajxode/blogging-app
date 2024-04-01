
import React from 'react';
import { NavLink } from 'react-router-dom';

function SettingsNavbar() {
    return (
        <div className='border-b flex'>
            <NavLink 
                to="/home/settings/account"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Account
            </NavLink>
            <NavLink 
                to="/home/settings/password"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Change Password
            </NavLink>
            <NavLink 
                to="/home/settings/delete"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Delete Account
            </NavLink>
        </div>
    )
}

export default SettingsNavbar;