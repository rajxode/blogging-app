

import React from 'react';
import { Link } from 'react-router-dom';


function Login() {


    return (
        <div className='w-full h-[92vh] flex justify-center items-center px-[5%]'>
            <div className='w-full md:w-4/5 lg:w-2/5 bg-[#f3f3f2] h-1/3 rounded shadow flex flex-col justify-between px-[3%] py-[1%]'>
                <div className='w-full h-1/5 flex justify-center'>
                    <h2 className='text-2xl font-bold text-[#FFB534]'>
                        Login
                    </h2>
                </div>
                
                <div className='w-full h-2/5 flex flex-col justify-between items-center'>
                    <div className='w-full'>
                        <input 
                            type="email" 
                            placeholder='Email'
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                    <div className='w-full'>
                        <input 
                            type="password" 
                            placeholder='Password'
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                </div>
                
                <div className='w-full h-1/4 flex flex-col justify-between items-center'>
                    <button className='bg-[#f8bf5e] px-2 py-1 w-full rounded shadow text-white font-semibold hover:bg-[#dfa94e]'>
                        Log In
                    </button>
                    <div>
                        <Link to='/signup' className='text-yellow-700 underline'>
                            Create New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;