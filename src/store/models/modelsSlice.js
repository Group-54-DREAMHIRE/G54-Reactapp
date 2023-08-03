import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applyJob: false,
}

const modelsSlice = createSlice({
    name: 'models',
    initialState,
    reducers:{
        openApplyJob:(state)=>{
            state.applyJob = true;
        },
        closeApplyJob:(state)=>{
            state.applyJob = false;
        }
    }
})

export const { openSignIn, closeSignIn, openSignUp, closeSignUp, openApplyJob, closeApplyJob} = modelsSlice.actions;

export default modelsSlice.reducer;