
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

    window.addEventListener('scroll',() => {
        if(window.scrollY > 400) {
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    });

    const handleLogOut = async(e) => {
        try {
            const result = await dispatch(logoutUserThunk());
            toast.success('User logged out');
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        dispatch(getLoggedInUserThunk());
    },[]);

    return (
        <div className='w-full relative'>
            <div className={`w-full min-h-[75px] h-auto  flex px-[10%] 
                flex-col shrink-0 border-b border-black justify-center sticky top-0 left-0 ${scrolled ? 'bg-white' : 'bg-[#FFC017]'}`}
            >
                <div className='flex justify-between items-center h-[55px] text-black'>

                    <div className='flex justify-start items-center w-full md:w-1/2 lg:w-3/4'>
                        <div className='text-3xl font-bold font-serif'>
                            <Link to='/'>
                                <span><i class="fa-brands fa-medium"></i></span> Medium
                            </Link>
                        </div>

                    </div>
                    

                    <div className='hidden sm:flex justify-between w-auto items-center'
                    >
                        <div>
                            {
                                user
                                ?
                                <div className='hidden md:flex justify-around items-center min-w-1/4 px-2 ml-3'>
                                    <div className='flex items-center mr-2 px-2 py-1 rounded-full cursor-pointer'>
                                        <Link to='/profile'>
                                            <span>
                                                <i class="fa-solid fa-user"></i>
                                            </span>
                                            &nbsp;
                                            My Profile
                                        </Link>
                                    </div>
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
                                <Link className='mx-4 hover:underline' to='/login'>
                                    Sign In
                                </Link>
                            }
                        </div>
                        <div>
                            {
                                user
                                ?
                                <button onClick={handleLogOut}
                                        className='hover:underline'
                                    >
                                    Log Out
                                </button>
                                :
                                <Link to='/signup' 
                                    className={`text-white px-3 py-1 rounded-full hover:bg-[#2c2c2c] flex items-center shadow-sm ${scrolled ? 'bg-[#1a8917]' : 'bg-black'} `}>
                                    Get Started
                                </Link>
                            }
                        </div>
                    </div>

                    <div className='sm:hidden text-xl w-auto px-2 py-1 rounded
                        hover:bg-black hover:text-white cursor-pointer'
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {
                            showMenu
                            ?
                            <i class="fa-solid fa-xmark"></i>
                            :
                            <i class="fa-solid fa-bars"></i>
                        }
                    </div>

                </div>
                
                {
                    showMenu
                    ?
                    <div className='w-full flex flex-col pb-1'>
                        {   
                            user
                            ?
                            <>
                                <div className='flex flex-col md:hidden w-full'>
                                    <div className='w-full flex items-center text-yellow-700 h-[30px] '>
                                        <Link to='/profile'>
                                            <span>
                                                <i class="fa-solid fa-user"></i>
                                            </span>
                                            &nbsp;
                                            My Profile
                                        </Link>
                                    </div>
                                    <div className='w-full flex items-center text-yellow-700 h-[30px] '>
                                        <Link to='addblog'>
                                            <span>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </span>
                                            &nbsp;
                                            Write
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full h-[30px]  flex items-center'>
                                    <button className='text-yellow-700'>
                                        Log Out
                                    </button>
                                </div>
                            </>
                            :
                            <>
                                <div className='w-full h-[30px]  flex items-center'>
                                    <Link className='text-yellow-700' to='/login'>
                                        Log In
                                    </Link>
                                </div>
                                <div className='w-full h-[30px] flex items-center'>
                                    <Link to='/signup' 
                                        className='text-yellow-700'
                                        >
                                        Get Started
                                    </Link>
                                </div>
                            </>
                            
                        }
                    </div>
                    :
                    null
                }
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;