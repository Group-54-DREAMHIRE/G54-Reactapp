import { configureStore } from "@reduxjs/toolkit";
import userReducere from './auth/userSlice';
import modelsReducer from './models/modelsSlice';
import candidateReducer from "./candidate/candidateSlice";
export const store = configureStore({
    reducer: {
        user: userReducere,
        models: modelsReducer,
        candidate: candidateReducer,
    }
})