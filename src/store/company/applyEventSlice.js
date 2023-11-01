import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   activeEventId:0,
   techList:null,
   hrList:null,
   activeList:null,
   appliedActEvent:null,
   appliedEvents:null
}

const applyEventSlice = createSlice({
  name: "applyEvent",
  initialState,
  reducers: {
    setActiveEventId: (state, action)=>{
      state.activeEventId=action.payload;
    },
    setTechList: (state, action)=>{
      state.techList=action.payload;
    },
    setHrList: (state, action)=>{
      state.hrList=action.payload;
    },
    setTimeList: (state, action)=>{
      if(action.payload===1){
        state.activeList = state.techList;
      }else if(action.payload===2){
        state.activeList = state.hrList;
      }
    },
    setAppliedActEvent: (state, action)=>{
      state.appliedActEvent = action.payload;
    },
    setAppliedEvents: (state, action)=>{
      state.appliedEvents = action.payload;
    },
  }  
});

export const {setActiveEventId, setTechList, setHrList, setTimeList, setAppliedActEvent,setAppliedEvents} = applyEventSlice.actions;
export const getActiveEventId = (state) => state.applyEvent.activeEventId;
export default applyEventSlice.reducer;
