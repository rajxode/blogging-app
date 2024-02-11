

import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { authSelector, getLoggedInUserThunk } from '../reducers/authReducer';
import Loader from '../components/Loader';
import { blogSelector, getAllBlogsThunk } from '../reducers/blogReducer';
import MainContainer from '../components/MainContainer';


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
                <MainContainer />
            </div>
        }
        </>
    )
}

export default Home;