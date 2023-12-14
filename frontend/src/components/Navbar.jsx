
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


function Navbar() {
    
    const [showMenu,setShowMenu] = useState(false);

    return (
        <>
            <div className='w-full min-h-[55px] h-auto bg-[#F2F1EB] flex px-[5%] 
                flex-col shrink-0 shadow'
            >
                <div className='flex justify-between items-center h-[55px]'>

                    <div className='flex items-center w-full md:w-1/2 lg:w-3/4'>
                        <div className='text-2xl font-bold text-[#FFB534]'>
                            <Link to='/'>
                                Blogging
                            </Link>
                        </div>
                    </div>
                    
                    <div className='hidden sm:flex justify-between w-2/5 md:w-1/4 lg:w-[20%] 
                        xl:w-[15%] items-center'
                    >
                        <div>
                            <Link className='underline text-yellow-700' to='/login'>
                                Log In
                            </Link>
                        </div>
                        <div>
                            <Link to='/signup' 
                                className='text-white bg-[#f8bf5e] font-semibold px-2 py-1 rounded-full hover:bg-[#dfa94e] flex items-center shadow-sm'>
                                Get Started
                            </Link>
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
                        <div className='w-full h-[30px] border-b border-slate-300 flex items-center'>
                            Log In
                        </div>
                        <div className='w-full h-[30px] flex items-center'>
                            Get Started
                        </div>
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