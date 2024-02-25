
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAccountThunk } from '../reducers/authReducer';
import { toast } from 'react-toastify';

function DeleteAccount() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState({
        password:'',
        cnfPassword:''
    });


    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(deleteAccountThunk(formData));
            if(result.payload.success){
                navigate('/');
                toast.success('Account deletion in progress !!!!');
            } else {
                throw new Error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='w-full md:w-3/5 flex flex-col items-center'>
            <div className='text-3xl font-semibold'>
                Delete Account
            </div>
            
            <div className='w-full mt-4'>
                <form className='w-full flex flex-col' onSubmit={handleSubmit}>
                    <div className='w-full my-2'>
                        <input type="checkbox" id='checkbox' />
                        <label htmlFor="checkbox" className='ml-2'>
                            Yes, I want to delete my account.
                        </label>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-[48%] flex flex-col my-2'>
                            <label htmlFor="password"
                                className='text-sm' >
                                Password
                            </label>
                            <input type="password"
                                id='password'
                                value={formData.password}
                                onChange={(e)=> setFormData({...formData,password:e.target.value})}
                                className='border-b border-black focus:outline-none' />
                        </div>
                        <div className='w-[48%] flex flex-col my-2'>
                            <label htmlFor="cnf_password"
                                className='text-sm' >
                                    Confirm Password
                            </label>
                            <input type="password"
                                id='cnf_password'
                                value={formData.cnfPassword}
                                onChange={(e)=> setFormData({...formData,cnfPassword:e.target.value})}
                                className='border-b border-black focus:outline-none' />
                        </div>
                    </div>
                    <div className='w-full my-2 flex justify-center'>
                        <button type='submit' 
                            className='px-3 py-1 text-sm bg-green-600 text-white rounded-full'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteAccount;