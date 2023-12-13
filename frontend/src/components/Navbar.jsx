
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


function Navbar() {
    
    const [showMenu,setShowMenu] = useState(false);

    return (
        <>
            <div className='w-full min-h-[55px] h-auto bg-gray-200 flex text-black px-[5%] 
                flex-col shrink-0 shadow'
            >
                <div className='flex justify-between items-center h-[55px]'>

                    <div className='flex items-center w-full md:w-1/2 lg:w-3/4'>
                        <div className='text-2xl font-bold'>
                            Blogger
                        </div>
                        <div className='flex justify-between items-center'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    
                    <div className='hidden sm:flex justify-between w-2/5 md:w-1/4 lg:w-[20%] 
                        xl:w-[15%] items-center'
                    >
                        <div>
                            <Link className='underline'>
                                Log In
                            </Link>
                        </div>
                        <div>
                            <button className='text-white bg-blue-400 font-semibold px-2 py-1 rounded-full shadow'>
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className='sm:hidden text-xl font-semibold w-auto px-2 py-1 rounded 
                        hover:bg-slate-400 hover:text-white cursor-pointer'
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