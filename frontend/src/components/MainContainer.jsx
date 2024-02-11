
import React from 'react'
import BlogList from './BlogList';
import Aside from './Aside';

function MainContainer() {
    
    return (
        <div className="w-full flex justify-between items-start px-[2%] md:px-[5%] lg:px-[10%] py-[5vh]">
            <div className='w-full md:w-3/5'>
                <BlogList />
            </div>
            <Aside />
        </div>
    )
}

export default MainContainer;