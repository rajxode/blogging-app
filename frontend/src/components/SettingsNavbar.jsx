
import React from 'react';
import { NavLink } from 'react-router-dom';

function SettingsNavbar() {
    return (
        <div className='border-b flex'>
            <NavLink 
                to="/settings/editinfo"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Edit Info
            </NavLink>
            <NavLink 
                to="/settings/picture"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Change Picture
            </NavLink>
            <NavLink 
                to="/settings/password"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Change Password
            </NavLink>
            <NavLink 
                to="/settings/theme"
                className={({ isActive }) =>
                    (isActive ? 'px-2 pb-[2px] border-green-600 border-r-2 bg-green-50' : 'px-2 pb-[2px] border-r')
                }
            >
                Theme
            </NavLink>
        </div>
    )
}

export default SettingsNavbar;