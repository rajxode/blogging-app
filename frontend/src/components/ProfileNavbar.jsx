
import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileNavbar() {
    return (
        <div className='w-full border-b flex mt-5'>
            <NavLink 
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
            >
                Home
            </NavLink>
            
            <NavLink 
                to="/profile/library"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
            >
                Saved
            </NavLink>
        </div>
    )
}

export default ProfileNavbar;