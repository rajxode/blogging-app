
import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authSelector, createUserThunk } from '../reducers/authReducer';
import Loader from '../components/Loader';

function SignUp() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector(authSelector);

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });


    useEffect(() => {
        document.title = 'SignUp | Medium';
    },[]);


    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(createUserThunk(formData));
            if(result.payload.success){
                toast.success('User created, Please Login to Continue');
                navigate('/login');   
            }
            else{
                toast.error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    return (
        <>
        {
            isLoading
            ?
            <Loader />
            :
            <div className='absolute w-full bg-[#f3f3f2] opacity-90 top-0 left-0 h-screen'>
                <div className='w-full h-full flex justify-center items-center px-[5%]'>
                    <div className='w-full md:w-4/5 lg:w-1/3 bg-white h-1/2 rounded shadow flex 
                        flex-col justify-between px-[3%] py-[1%] relative'
                        >
                
                        <div className='absolute top-1 right-2 rounded-full cursor-pointer hover:bg-slate-200'>
                            <Link to='/' className='px-[9px] py-[3px]'>
                                X
                            </Link>
                        </div>

                        <div className='w-full h-1/5 flex justify-center items-center'>
                            <h2 className='text-2xl font-semibold font-serif'>
                                Sign Up with your email
                            </h2>
                        </div>
                        
                        <form className='w-full h-4/5 flex flex-col justify-around'>
                        <div className='w-full h-[45%] flex flex-col justify-around items-center'>
                            <div className='w-full'>
                                <input 
                                    type="text" 
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData,name:e.target.value})}
                                    className='w-full h-[35px] px-2 border-b border-black py-1 focus:outline-none'
                                    />
                            </div>
                            <div className='w-full'>
                                <input 
                                    type="email" 
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData,email:e.target.value})}
                                    className='w-full h-[35px] px-2 border-b border-black py-1 focus:outline-none'
                                    />
                            </div>
                            <div className='w-full'>
                                <input 
                                    type="password" 
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData,password:e.target.value})}
                                    className='w-full h-[35px] px-2 border-b border-black py-1 focus:outline-none'
                                    />
                            </div>
                        </div>
                        
                        <div className='w-full h-1/4 flex flex-col justify-around items-center'>
                            <button className='bg-[#131313] px-2 py-1 w-2/3 rounded-full shadow text-white hover:bg-black'
                                onClick={handleSubmit}>
                                Create Account
                            </button>
                            <div>
                                Already have an account?
                                &nbsp;
                                <Link to='/login' className='text-[#1a8917] underline'>
                                    Sign In
                                </Link>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default SignUp;