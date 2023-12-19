
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

const initialState = { user:null , isLoading:false };

// sign up user
export const createUserThunk = createAsyncThunk(
    'auth/create',
    async(formData,thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/create',{formData});
            return response.data;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
);


// login user
export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async(formData,thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/login',{formData});
            const { token , user } = response.data;
            localStorage.setItem('token',JSON.stringify(token));
            thunkAPI.dispatch(setUser(user));
            return response.data;
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)

export const logoutUserThunk = createAsyncThunk(
    'auth/logout',
    async(args,thunkAPI) => {
        try {
            const isToken = localStorage.getItem('token');
            if(!isToken){
                return;
            }
            
            const token = JSON.parse(isToken);
            const response = await axiosInstance.get('/users/logout',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            thunkAPI.dispatch(setUser(null));
        } catch (error) {
            return {
                success:false,
                message:error.response.data.error
            }
        }
    }
)


export const getLoggedInUserThunk = createAsyncThunk(
    'auth/getLoggedInUser',
    async(args,thunkAPI) => {
        try {
            console.log('get details');
            const isToken = localStorage.getItem('token');
            if(!isToken){
                return;
            }
            const token = JSON.parse(isToken);
            const response = await axiosInstance.get('/users/mydetails',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            thunkAPI.dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error);
        }
    } 
)


// authentication slice
const authSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload;
            return;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUserThunk.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(createUserThunk.fulfilled , (state,action) => {
            state.isLoading = false;
        })
        .addCase(loginUserThunk.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase(loginUserThunk.fulfilled , (state,action) => {
            state.isLoading = false;
        })
    }
});



export const authReducer = authSlice.reducer;

export const { setUser } = authSlice.actions;

export const authSelector = (state) => state.authReducer;