import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventState:null,
    activeId:0,
}

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state,action) => {
      state.eventState = action.payload;
    },
    saveEvent: (state, action)=>{ 
        state.eventState.push(action.payload);
    },
    getEvents: (state, action) => {
       state.eventState.find((event) => event.id === action.payload);
    },
    setActiveId: (state, action)=>{
      state.activeId=action.payload;
    },
  }  
});

export const { setEvents, saveEvent, getEvents } = eventSlice.actions;
export const getAllEvents = (state) => state.event.eventState;
export default eventSlice.reducer;
