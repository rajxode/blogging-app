
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
        <>
            <div className='w-full min-h-[55px] h-auto bg-[#F2F1EB] flex px-[5%] 
                flex-col shrink-0 shadow'
            >
                <div className='flex justify-between items-center h-[55px]'>

                    <div className='flex justify-start items-center w-full md:w-1/2 lg:w-3/4'>
                        <div className='text-2xl font-bold text-[#FFB534]'>
                            <Link to='/'>
                                Blogging
                            </Link>
                        </div>


                        {   
                            user
                            ? 
                            <div className='hidden md:flex justify-around items-center min-w-1/4 px-2 ml-3'>
                                <div className='flex items-center mr-2 font-semibold text-yellow-700 hover:bg-[#ecc98d] px-2 py-1 rounded-full cursor-pointer hover:text-white'>
                                    <Link to='/profile'>
                                        <span>
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                        &nbsp;
                                        My Profile
                                    </Link>
                                </div>
                                <div className='flex items-center mr-2 font-semibold text-yellow-700 hover:bg-[#ecc98d] px-2 py-1 rounded-full cursor-pointer hover:text-white'>
                                    <Link to='/addblog'>
                                        <span>
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                        &nbsp;
                                        Add New
                                    </Link>
                                </div>
                            </div>
                            :
                            null
                        }

                    </div>
                    

                    <div className='hidden sm:flex justify-between w-2/5 md:w-1/4 lg:w-[20%] 
                        xl:w-[15%] items-center'
                    >
                        <div>
                            {
                                user
                                ?
                                null
                                :
                                <Link className='underline font-semibold text-yellow-700' to='/login'>
                                    Log In
                                </Link>
                            }
                        </div>
                        <div>
                            {
                                user
                                ?
                                <button onClick={handleLogOut}
                                        className='text-yellow-700 font-semibold hover:underline'
                                    >
                                    Log Out
                                </button>
                                :
                                <Link to='/signup' 
                                    className='text-white bg-[#f8bf5e] font-semibold px-2 py-1 rounded-full hover:bg-[#dfa94e] flex items-center shadow-sm'>
                                    Get Started
                                </Link>
                            }
                        </div>
                    </div>

                    <div className='sm:hidden text-xl font-semibold w-auto px-2 py-1 rounded text-yellow-600 
                        hover:bg-yellow-500 hover:text-white cursor-pointer'
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
                                                <i class="fa-solid fa-plus"></i>
                                            </span>
                                            &nbsp;
                                            Add New
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
        </>
    )
}

export default Navbar;