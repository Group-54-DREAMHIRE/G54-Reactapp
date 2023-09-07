import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applyJob: false,
    collapsed:false,
    customContent:false,
    addLink:false,
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
        },
        openCustomContent:(state)=>{
            state.customContent = true;
        },
        closeCustomContent:(state)=>{
            state.customContent = false;
        },
        openAddLink:(state)=>{
            state.addLink = true;
        },
        closeAddLink:(state)=>{
            state.addLink = false;
        },
    }
})

export const { openApplyJob, closeApplyJob, setCollapsed,openCustomContent, closeCustomContent,openAddLink,closeAddLink} = modelsSlice.actions;

export default modelsSlice.reducer;