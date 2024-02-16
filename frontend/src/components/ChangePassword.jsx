
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordThunk } from '../reducers/authReducer';
import { toast } from 'react-toastify';

function ChangePassword() {

    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState({
        password:'',
        newPassword:'',
        cnfPassword:''
    });

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            if( formData.newPassword !== formData.cnfPassword ){
                throw new Error("New and Confirm Password Doesn't match");
            }
            const result = await dispatch(changePasswordThunk(formData));
            if(result.payload.success){
                toast.success('Password updated !!!');
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
                Update Password
            </div>
            
            <div className='w-full mt-4'>
                <form className='w-full flex flex-col' onSubmit={handleSubmit}>
                    <div className='w-[48%] my-2 flex flex-col'>
                        <label htmlFor="old_password"
                            className='text-sm' >
                            Old Password
                        </label>
                        <input type="password"
                            id='old_password'
                            required
                            onChange={(e) => setFormData({...formData,password:e.target.value})}
                            className='border-b border-black focus:outline-none' />
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-[48%] flex flex-col my-2'>
                            <label htmlFor="new_password"
                                className='text-sm' >
                                New Password
                            </label>
                            <input type="password"
                                id='new_password'
                                required
                                onChange={(e) => setFormData({...formData,newPassword:e.target.value})}
                                className='border-b border-black focus:outline-none' />
                        </div>
                        <div className='w-[48%] flex flex-col my-2'>
                            <label htmlFor="cnf_password"
                                className='text-sm' >
                                    Confirm Password
                            </label>
                            <input type="password"
                                id='cnf_password'
                                required
                                onChange={(e) => setFormData({...formData,cnfPassword:e.target.value})}
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

export default ChangePassword;