
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/axios';

function SignUp() {
    

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });


    const handleSubmit = async(e) => {
        try {
            console.log('button clicked');
            const response = await axiosInstance.post('/users/create',{formData});
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='w-full h-[92vh] flex justify-center items-center px-[5%]'>
            <div className='w-full md:w-4/5 lg:w-2/5 bg-[#f3f3f2] h-2/5 rounded shadow flex flex-col justify-between px-[3%] py-[1%]'>
                <div className='w-full h-1/5 flex justify-center'>
                    <h2 className='text-2xl font-bold text-[#FFB534]'>
                        Sign Up
                    </h2>
                </div>
                
                <div className='w-full h-[45%] flex flex-col justify-between items-center'>
                    <div className='w-full'>
                        <input 
                            type="text" 
                            placeholder='Name'
                            value={formData.name}
                            onChange={(e) => setFormData({...formData,name:e.target.value})}
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                    <div className='w-full'>
                        <input 
                            type="email" 
                            placeholder='Email'
                            value={formData.email}
                            onChange={(e) => setFormData({...formData,email:e.target.value})}
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                    <div className='w-full'>
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={formData.password}
                            onChange={(e) => setFormData({...formData,password:e.target.value})}
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                </div>
                
                <div className='w-full h-1/4 flex flex-col justify-between items-center'>
                    <button className='bg-[#f8bf5e] px-2 py-1 w-full rounded shadow text-white font-semibold hover:bg-[#dfa94e]'
                        onClick={handleSubmit}>
                        Create Account
                    </button>
                    <div>
                        Already have an account?
                        &nbsp;
                        <Link to='/login' className='text-yellow-700 underline'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;