
import React from 'react';

function ChangePassword() {
    return (
        <div className='w-full md:w-3/5 flex flex-col items-center'>
            <div className='text-3xl font-semibold'>
                Update Password
            </div>
            
            <div className='w-full mt-4'>
                <form className='w-full flex flex-col'>
                    <div className='w-[48%] my-2 flex flex-col'>
                        <label htmlFor="old_password"
                            className='text-sm' >
                            Old Password
                        </label>
                        <input type="password"
                            id='old_password'
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
                                className='border-b border-black focus:outline-none' />
                        </div>
                        <div className='w-[48%] flex flex-col my-2'>
                            <label htmlFor="cnf_password"
                                className='text-sm' >
                                    Confirm Password
                            </label>
                            <input type="password"
                                id='cnf_password'
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