
import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileNavbar() {
    return (
        <div className='w-full border-b flex'>
            <NavLink 
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "bg-red-900" : ""
                }
              >
                Home
            </NavLink>
            
            <NavLink>
                Saved
            </NavLink>
        </div>
    )
}

export default ProfileNavbar;