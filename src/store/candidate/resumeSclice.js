import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalData:null ,
    contentData:null,
    hasCv:false
}

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setPersonalData: (state,action) => {
      state.personalData = action.payload;
    },
    setContentData: (state,action) => {
        state.contentData = action.payload;
      },
      setHasCv: (state) => {
        state.hasCv = true;
      },
  },
});

export const { setPersonalData, setContentData, setHasCv } = resumeSlice.actions;
export default resumeSlice.reducer;
