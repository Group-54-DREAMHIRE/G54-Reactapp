import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   activeJobId:0,
   techList:null,
   hrList:null,
   activeList:null
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
    }
  }  
});

export const {setActiveJobId, setTechList, setHrList, setTimeList} = applyJobSlice.actions;
export const getActiveJobPostId = (state) => state.applyjob.activeJobId;
export default applyJobSlice.reducer;
