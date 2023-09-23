import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobPosts:null,
    activeId:0,
}

const jobSlice = createSlice({
  name: "jobPost",
  initialState,
  reducers: {
    setJobPosts: (state,action) => {
      state.jobPosts = action.payload;
    },
    addJobPost: (state, action)=>{
        state.jobPosts.push(action.payload);
    },
    getJobPost: (state, action) => {
       state.jobPosts.find((jobPost) => jobPost.id === action.payload);
    },
    setActiveId: (state, action)=>{
      state.activeId=action.payload;
    },
  }  
});

export const { setJobPosts, addJobPost, getJobPost,setActiveId } = jobSlice.actions;
export const getAllJobPosts = (state) => state.jobPost.jobPosts;
export const getActiveId = (state) => state.jobPost.activeId;
export default jobSlice.reducer;
