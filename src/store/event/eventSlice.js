import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events:null,
}

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state,action) => {
      state.events = action.payload;
    },
    saveEvent: (state, action)=>{ 
        state.events.push(action.payload);
    },
    getEvents: (state, action) => {
       state.events.find((event) => event.id === action.payload);
    }
  }  
});

export const { setEvents, saveEvent, getEvent } = eventSlice.actions;
export const getAllEvents = (state) => state.event.events;
export default eventSlice.reducer;
