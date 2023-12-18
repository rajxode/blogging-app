
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

const initialState = { user:null , isLoading:false };

// sign up user
export const createUserThunk = createAsyncThunk(
    'auth/create',
    async(formData,thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/create',{formData});
            console.log(response.data);
        } catch (error) {
            console.log(error);
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
            localStorage.setItem('token',token);
            thunkAPI.dispatch(setUser(user));
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