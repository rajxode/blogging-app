

import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUserThunk } from '../reducers/authReducer';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        email:'',
        password:''
    });

    useEffect(() => {
        document.title = 'Login | Medium';
    },[]);

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(loginUserThunk(formData));
            if(result.payload.success){
                toast.success('User logged In');
                navigate('/profile');
            }
            else{
                toast.error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='absolute w-full bg-[#f3f3f2] opacity-90 top-0 left-0 h-screen'>
            <div className='w-full h-full flex justify-center items-center px-[5%]'>
            <div className='w-full md:w-4/5 lg:w-2/5 bg-white h-2/5 rounded 
                shadow flex flex-col justify-between px-[3%] py-[1%] relative'
                >

                <div className='absolute top-1 right-2 rounded-full cursor-pointer hover:bg-slate-200'>
                <Link to='/' className='px-[9px] py-[3px]'>
                        X
                    </Link>
                </div>

                <div className='w-full h-1/5 flex justify-center items-center'>
                    <h2 className='text-2xl font-semibold font-serif'>
                        Sign In with your email
                    </h2>
                    
                </div>
                
                <div className='w-full h-2/5 flex flex-col justify-around items-center'>
                    <div className='w-full'>
                        <input 
                            type="email" 
                            placeholder='Email'
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email:e.target.value})}
                            className='w-full h-[35px] px-2 py-1 focus:outline-none border-b border-black'
                            />
                    </div>
                    <div className='w-full'>
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password:e.target.value})}
                            className='w-full h-[35px] px-2 py-1 focus:outline-none border-b border-black'
                            />
                    </div>
                </div>
                
                <div className='w-full h-[30%] flex flex-col justify-around items-center'>
                    <button className='bg-[#131313] px-2 py-1 w-2/3 rounded-full shadow text-white hover:bg-black'
                        onClick={handleSubmit}
                        >
                        Log In
                    </button>
                    <div>
                        <Link to='/signup' className='text-[#1a8917] underline underline-offset-4'>
                            Create New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;