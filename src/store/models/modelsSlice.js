import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signIn: false,
    signUp: false,
    applyJob: false,
}

const modelsSlice = createSlice({
    name: 'models',
    initialState,
    reducers:{
        openSignIn:(state)=>{
            state.signIn = true;
        },
        closeSignIn:(state)=>{
            state.signIn = false;
        },
        openSignUp:(state)=>{
            state.signUp = true;
        },
        closeSignUp:(state)=>{
            state.signUp = false;
        },
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