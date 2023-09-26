import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    candidates:null,
    
}

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setCandidates: (state,action) => {
      state.candidates = action.payload;
    },
    getCandidate: (state,action) => {
      state.candidates.find((candidate) => candidate.id === action.payload);
    }
  },
});

export const { setCandidates, getCandidate } = candidateSlice.actions;
export const getAllCandidates = (state) => state.candidate.candidates;
export default candidateSlice.reducer;
