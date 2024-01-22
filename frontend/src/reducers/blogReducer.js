

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

// blogs
const initialState = { blogs:[] };

// add a new blog
export const addBlogThunk = createAsyncThunk(
    'blog/createBlog',
    async(formData,thunkAPI) => {
        try {
            // get token from local storage
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.post('/blogs/addblog',formData,{
                headers:{ 
                    'Content-Type':'multipart/form-data',
                    'Authorization':`Bearer ${token}`
                }
            });
            console.log('response',response.data);
        } catch (error) {
            console.log(error);
        }
    }
)

// blog slice
const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        setBlogs:(state,action) => {
            state.blogs = action.payload;
            return;
        }
    }
});


// export reducer
export const blogReducer = blogSlice.reducer;

// actions
export const { setBlogs } = blogSlice.actions;

// export selector
export const blogSelector = (state) => state.blogReducer;