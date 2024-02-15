
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, updateUserInfoThunk } from '../reducers/authReducer';
import { toast } from 'react-toastify';
import ProfilePicture from './ProfilePicture';

function EditInfo() {
    
    const dispatch = useDispatch();
    const { loggedInUser } = useSelector(authSelector);
    const [ formData, setFormData ] = useState({
        name:loggedInUser.name,
        email:loggedInUser.email,
        bio:loggedInUser.bio || '',
        file:''
    }) ;

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            console.log(formData);
            const result = await dispatch(updateUserInfoThunk(formData));
            if(!result.payload.success){
                throw new Error(result.payload.message);
            } else {
                toast.success('Data updated !!!');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='w-full md:w-3/5 flex flex-col items-center'>
            <div className='text-2xl font-semibold'>
                Edit Info
            </div>
            <div className='w-full mt-2'>
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <label htmlFor='profile' className='w-[150px] h-[150px] overflow-hidden rounded-full'>
                            <ProfilePicture />
                        </label>
                        <input type="file" 
                            onChange={(e) => setFormData({...formData,file:e.target.files[0]})}
                            id='profile' 
                            className='focus:outline-none border-b border-black w-0' />
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-[48%] flex flex-col mb-2'>
                            <label htmlFor="name" className='text-sm text-slate-500'>
                                Name
                            </label>
                            <input type="text"
                                id='name'
                                value={formData.name}
                                onChange={(e) => setFormData({...formData,name:e.target.value})}
                                placeholder='Name' 
                                className='focus:outline-none border-b border-black py-1' />
                        </div>
                        <div className='w-[48%] flex flex-col mb-2'>
                            <label htmlFor="email" className='text-sm text-slate-500'>
                                Email
                            </label>
                            <input type="email"
                                id='email' 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData,email:e.target.value})}
                                placeholder='Email' 
                                className='focus:outline-none border-b border-black py-1' />
                        </div>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="bio" className='text-sm text-slate-500'>
                            Bio
                        </label>
                        <input type="text"
                            id='bio'
                            value={formData.bio}
                            onChange={(e) => setFormData({...formData,bio:e.target.value})}
                            placeholder='Tell us about yourself...' 
                            className='focus:outline-none border-b border-black py-1' />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button type='submit'
                            className='px-3 py-1 text-sm bg-green-600 w-fit rounded-full text-white'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditInfo;