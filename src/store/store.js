import { configureStore } from "@reduxjs/toolkit";
import userReducere from './auth/userSlice';
import modelsReducer from './models/modelsSlice';
import candidateReducer from "./candidate/candidateSlice";
import companyReducer from "./company/companySlice";
import jobReducer from "./jobpost/jobSlice";
import applyJobReducer from "./company/applyJobSlice";
import resumeReducer from "./candidate/resumeSclice";
export const store = configureStore({
    reducer: {
        user: userReducere,
        models: modelsReducer,
        candidate: candidateReducer,
        company: companyReducer,
        jobPost: jobReducer,
        applyJob: applyJobReducer,
        resume: resumeReducer,
    }
})