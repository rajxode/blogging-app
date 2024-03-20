

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

// blogs
const initialState = { blogs:[] , loading:false, singleBlog:null };


export const getOneBlogThunk = createAsyncThunk(
    'blog/getABlog',
    async(id,thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/blogs/${id}`);
            thunkAPI.dispatch(setSingleBlog(response.data.blog));
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
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
                message:error.response.data.error
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
                message:error.response.data.error
            }
        }
    }
)


export const updateBlogThunk = createAsyncThunk(
    'blog/updateBlog',
    async({id,formData},thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.put(`/blogs/${id}`,formData,{
                headers:{ 
                    'Content-Type':'multipart/form-data',
                    'Authorization':`Bearer ${token}`
                }
            });

            return response.data.success;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const deleteBlogThunk = createAsyncThunk(
    'blog/deleteBlog',
    async(id,thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.delete(`/blogs/${id}`,{
                headers:{ 
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data.success;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const addCommentThunk = createAsyncThunk(
    'blog/addComment',
    async({id,content},thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.post(`/blogs/comment/${id}`,{content},{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const deleteCommentThunk = createAsyncThunk(
    'blog/deleteComment',
    async({id},thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.delete(`/blogs/comment/${id}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const toggleLikeThunk = createAsyncThunk(
    'blog/toggleLike',
    async(id,thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.get(`/blogs/togglelike/${id}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const toggleSaveBlogThunk = createAsyncThunk(
    'blog/toggleSaveBlog',
    async(id,thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            // if token not present return
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            // call api
            const response = await axiosInstance.get(`/blogs/saveblog/${id}`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return {
                success:false,
                error
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
        .addCase(updateBlogThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(updateBlogThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(deleteBlogThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(deleteBlogThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(addCommentThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(addCommentThunk.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(deleteCommentThunk.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(deleteCommentThunk.fulfilled, (state,action) => {
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