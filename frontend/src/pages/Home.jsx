

import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import Loader from '../components/Loader';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';
import BlogList from '../components/BlogList';
import Aside from '../components/Aside';


function Home() {

    const { isLoading } = useSelector(authSelector);
    const { loading } = useSelector(blogSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Home | Medium';
    },[]);

    useEffect(() => {
       dispatch(getLoggedInUserThunk());
       dispatch(getAllBlogsThunk());
    },[])

    return(
        <>
        {
            isLoading || loading
            ?
            <Loader />
            :
            <div className='w-full py-[2%] flex flex-col'>
                <div className="w-full flex justify-between items-start px-[2%] md:px-[10%] py-[5vh]">
                    <div className='w-full md:w-3/5'>
                        <BlogList />
                    </div>
                    <Aside />
                </div>
            </div>
        }
        </>
    )
}

export default Home;