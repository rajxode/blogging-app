
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk, logoutUserThunk } from '../reducers/authReducer';
import { toast } from 'react-toastify';


function Navbar() {
    
    const { user } = useSelector(authSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showMenu,setShowMenu] = useState(false);

    const [scrolled,setScrolled] = useState(false);

    const handleLogOut = async(e) => {
        try {
            const result = await dispatch(logoutUserThunk());
            if(result.payload){
                toast.success('User logged out');
                navigate('/');
            }
            else{
                toast.error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        dispatch(getLoggedInUserThunk());
    },[]);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 400) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        });
    },[scrolled])

    return (
        <div className='w-full relative'>
            <div className={`w-full min-h-[75px] h-auto flex px-[2%] md:px-[10%] flex-col shrink-0 border-b
                border-black justify-center sticky top-0 left-0 ${scrolled || user ? 'bg-white z-10' : 'bg-[#FFC017]'}`}
            >
                <div className='w-full flex justify-between items-center h-[55px] text-black'>

                    <div className='flex justify-start items-center'>
                        <div className='text-3xl font-bold font-serif'>
                            <Link to={`${user ? '/profile' : '/'}`}>
                                <span><i class="fa-brands fa-medium"></i></span> <span className='hidden sm:inline'>Medium</span>
                            </Link>
                        </div>
                    </div>
                    

                    <div className='flex justify-between w-auto items-center'
                    >
                        <div className='hidden sm:block'>
                            {
                                user
                                ?
                                <div className='hidden md:flex justify-around items-center min-w-1/4 px-2 ml-3'>
                                    <div className='flex items-center mr-2 px-2 py-1 rounded-full cursor-pointer'>
                                        <Link to='/addblog'>
                                            <span>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </span>
                                            &nbsp;
                                            Write
                                        </Link>
                                    </div>
                                </div>
                                :
                                <Link className='hover:underline mx-4' to='/login'>
                                    Sign In
                                </Link>
                            }
                        </div>

                        <div>
                            {
                                user
                                ?
                                <div onClick={() => setShowMenu(!showMenu)}
                                        className='bg-red-400 h-[50px] w-[50px] rounded-full relative cursor-pointer'
                                    >
                                        {
                                            showMenu
                                            ?
                                            <div className='absolute flex flex-col right-0 top-[7vh] bg-white shadow-lg w-[150px] text-slate-400 
                                                    border border-slate-100 rounded'>
                                                <div className='flex flex-col justify-around py-2 border-b px-3'>
                                                    <div className='pb-2 hover:text-slate-600'>
                                                        <spna><i class="fa-regular fa-user"></i></spna> Profile
                                                    </div>
                                                    <div className='pb-2 hover:text-slate-600'>
                                                        <span><i class="fa-regular fa-bookmark"></i></span> Library
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-around py-2 border-b px-3'>
                                                    <div className='hover:text-slate-600'>
                                                        Settings
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-around py-2 px-3'>
                                                    <div className='hover:text-slate-600'
                                                        onClick={handleLogOut}>
                                                        Sign out
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                        }
                                </div>
                                :
                                <Link to='/signup' 
                                    className={`text-white px-3 py-1 rounded-full hover:bg-[#2c2c2c] shadow-sm ${scrolled ? 'bg-[#1a8917]' : 'bg-black'} `}>
                                    Get Started
                                </Link>
                            }
                        </div>
                    </div>


                </div>
                
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;