
import React from 'react';
import { NavLink } from 'react-router-dom';

function ProfileNavbar() {
    return (
        <div className='w-full border-b flex my-4'>
            <NavLink 
                to="/home/profile/mylist"
                style={({ isActive }) =>
                    (isActive ? {textDecoration:'underline' , textDecorationColor:'#1a8917' , textDecorationThickness:'3px'} : undefined)
                }
                className='underline-offset-4'
            >
                Your List
            </NavLink>
            
            <NavLink 
                to="/home/profile/library"
                style={({ isActive }) =>
                    (isActive ? {textDecoration:'underline' , textDecorationColor:'#1a8917' , textDecorationThickness:'3px'} : undefined)
                }
                className='underline-offset-4 mx-4'
            >
                Saved List
            </NavLink>

        </div>
    )
}

export default ProfileNavbar;