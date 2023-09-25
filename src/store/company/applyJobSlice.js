import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   activeJobId:0,
   techList:null,
   hrList:null,
   activeList:null,
   appliedActJob:null,
   appliedJobs:null
}

const applyJobSlice = createSlice({
  name: "applyJob",
  initialState,
  reducers: {
    setActiveJobId: (state, action)=>{
      state.activeJobId=action.payload;
    },
    setTechList: (state, action)=>{
      state.techList=action.payload;
    },
    setHrList: (state, action)=>{
      state. hrList=action.payload;
    },
    setTimeList: (state, action)=>{
      if(action.payload===1){
        state.activeList = state.techList;
      }else if(action.payload===2){
        state.activeList = state.hrList;
      }
    },
    setAppliedActJob: (state, action)=>{
      state.appliedActJob = action.payload;
    },
    setAppliedJobs: (state, action)=>{
      state.appliedJobs = action.payload;
    }
  }  
});

export const {setActiveJobId, setTechList, setHrList, setTimeList, setAppliedActJob,setAppliedJobs} = applyJobSlice.actions;
export const getActiveJobPostId = (state) => state.applyjob.activeJobId;
export default applyJobSlice.reducer;
