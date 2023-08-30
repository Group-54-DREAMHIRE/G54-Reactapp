import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applyJob: false,
    collapsed:false,
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
        },
        setCollapsed:(state, action)=>{
            state.collapsed= !action.payload;
        }
    }
})

export const { openApplyJob, closeApplyJob, setCollapsed} = modelsSlice.actions;

export default modelsSlice.reducer;