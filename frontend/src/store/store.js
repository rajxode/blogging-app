
// for creating store
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "../reducers/authReducer";
import { blogReducer } from "../reducers/blogReducer";

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key:'root',
    storage
};

const reducer = combineReducers({
    authReducer,
    blogReducer
});

const persistedReducer = persistReducer(persistConfig,reducer);

// creating store from reducers
export const store = configureStore({
    reducer:persistedReducer
    // reducer:{
    //     authReducer,
    //     blogReducer
    // }
})