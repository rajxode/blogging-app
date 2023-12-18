
// for creating store
import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "../reducers/authReducer";

// creating store from reducers
export const store = configureStore({
    reducer:{
        authReducer
    }
})