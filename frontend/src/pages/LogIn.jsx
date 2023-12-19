

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
        document.title = 'Login | Blogging';
    },[]);

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(loginUserThunk(formData));
            if(result.payload.success){
                toast.success('User logged In');
                navigate('/');
            }
            else{
                toast.error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='w-full h-[92vh] flex justify-center items-center px-[5%]'>
            <div className='w-full md:w-4/5 lg:w-2/5 bg-[#f3f3f2] h-1/3 rounded 
                shadow flex flex-col justify-between px-[3%] py-[1%]'
                >
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
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email:e.target.value})}
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                    <div className='w-full'>
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password:e.target.value})}
                            className='w-full h-[35px] px-2 bg-slate-200 rounded py-1 focus:outline-none'
                            />
                    </div>
                </div>
                
                <div className='w-full h-1/4 flex flex-col justify-between items-center'>
                    <button className='bg-[#f8bf5e] px-2 py-1 w-full rounded shadow text-white 
                            font-semibold hover:bg-[#dfa94e]'
                        onClick={handleSubmit}
                        >
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