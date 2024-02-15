
import React from 'react';

function DeleteAccount() {
    return (
        <div className='w-full md:w-3/5 flex flex-col items-center'>
            <div className='text-3xl font-semibold'>
                Delete Account
            </div>
            
            <div className='w-full mt-4'>
                <form className='w-full flex flex-col'>
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

export default DeleteAccount;