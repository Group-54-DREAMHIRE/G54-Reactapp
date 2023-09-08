import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applyJob: false,
    collapsed:false,
    customContent:false,
    addLink:false,
    viewEditDetails:false,
    addContent:false,
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
        openViewEditDetails:(state)=>{
            state.viewEditDetails = true;
        },
        closeViewEditDetails:(state)=>{
            state.viewEditDetails = false;
        },
        openAddContent:(state)=>{
            state.addContent = true;
        },
        closeAddContent:(state)=>{
            state.addContent = false;
        },
    }
})

export const { 
    openApplyJob, 
    closeApplyJob, 
    setCollapsed,
    openCustomContent, 
    closeCustomContent,
    openAddLink,
    closeAddLink,
    openViewEditDetails,
    closeViewEditDetails,
    openAddContent,
    closeAddContent
} = modelsSlice.actions;

export default modelsSlice.reducer;