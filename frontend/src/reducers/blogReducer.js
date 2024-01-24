

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

// blogs
const initialState = { blogs:[] , loading:false, singleBlog:{} };


export const getOneBlogThunk = createAsyncThunk(
    'blog/getABlog',
    async(id,thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/blogs/${id}`);
            thunkAPI.dispatch(setSingleBlog(response.data.blog));
        } catch (error) {
            console.log(error);
        }
    }
)


// get all blogs from database
export const getAllBlogsThunk = createAsyncThunk(
    'blog/getBlogs',
    async(args,thunkAPI) => {
        try {
            const response = await axiosInstance.get('/blogs/getblogs');
            thunkAPI.dispatch(setBlogs(response.data.blogs));
        } catch (error) {
            return {
                success:false,
                message:error.message
            }
        }
    }
)


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
            return response.data.success;
        } catch (error) {
            return {
                success:false,
                message:error.message
            }
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
        },
        setSingleBlog:(state,action) => {
            state.singleBlog = action.payload;
            return;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addBlogThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(addBlogThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(getAllBlogsThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(getAllBlogsThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(getOneBlogThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(getOneBlogThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
    }
});


// export reducer
export const blogReducer = blogSlice.reducer;

// actions
export const { setBlogs , setSingleBlog } = blogSlice.actions;

// export selector
export const blogSelector = (state) => state.blogReducer;