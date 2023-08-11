import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import { fetchUserData } from "../../api/authenticationService";

export const saveCandidate = createAsyncThunk(
    'user/saveCandidate',
    async(data) => {
        const response = await fetchUserData(data);
        return response.status;
    }
)

const candidateSlice = createSlice({
    name: 'candidate',
    initialState: {
        succes:null,
        error: null,
    },
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCandidate.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(saveCandidate.fulfilled, (state, action)=>{
            
                state.loading = false;
                state.error = null;
                state.succes = "Saved Succesfully!"
            })
            .addCase(saveCandidate.rejected, (state, action)=>{
                state.loading = false;
                if(action.error.message === 'Request failed with status code 401'){
                    state.error = 'Invalid Details'  
                }else{
                    state.error = action.error.message;
                }
            })

           

           
        }
});


export default candidateSlice.reducer;