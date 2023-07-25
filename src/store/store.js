import { configureStore } from "@reduxjs/toolkit";
import userReducere from './userSlice';
export const store = configureStore({
    reducer: {
        user: userReducere,
    }
})