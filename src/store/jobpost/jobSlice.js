import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobPosts:null,
}

const jobSlice = createSlice({
  name: "jobPost",
  initialState,
  reducers: {
    setJobPosts: (state,action) => {
      state.jobPosts = action.payload;
    },
    addJobPost: (state, action) => {
        state.jobPosts.push(action.payload);
    },
    getJobPost: (state, action) => {
        state.jobPosts.find((jobPost) => jobPost.id === action.payload);
    }
  }  
});

export const { setJobPosts, addJobPost, getJobPost } = jobSlice.actions;
export const getAllJobPosts = (state) => state.jobPost.jobPosts;
export default jobSlice.reducer;
