import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
   


const userSlice = createSlice({
    name: 'user',
    initialState:[{user:null}],
    reducers: {
        setCredentials(state, action){
           state.push(action.payload)
            // state.email = data.user.email
            // localStorage.setItem('email',data.user.email)
            // state.email = data.user.email.action.payload
            // console.log(email);
            console.log(state.user)
           

        },
        logout: (state) => {
            localStorage.clear();
            
            state.token = null
        },
    }
});

export const { setCredentials, logout} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.token;