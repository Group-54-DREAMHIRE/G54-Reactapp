import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import { userLogin, userRegister } from "../../api/authenticationService";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        const response = await userLogin(userCredentials);
        const user = response.data.user;
        const token = response.data.accessToken;
        localStorage.setItem('USER', JSON.stringify(user));
        localStorage.setItem("TOKEN", JSON.stringify(token))
        return response;
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userCredentials) => {
        const response = await userRegister(userCredentials);
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token:null,
        isLoggedIn: false,
        loading: false,
        message:"",
        user: null,
        error: null,
    },
    reducers:{
        logout: (state)=>{
            state.user = null

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state)=>{
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                const{response} =action.payload
                state.loading = false;
                state.user = response.user;
                state.token = response.accessToken;
                state.error = null;
                state.isLoggedIn = true;
                state.message = "login is Success!"
            })
            .addCase(loginUser.rejected, (state, action)=>{
                state.loading = false;
                state.user = null;
                if(action.error.message === 'Request failed with status code 401'){
                    state.error = 'Invalid Username Or Password!'  
                }else{
                    state.error = action.error.message;
                }
            })

            builder
            .addCase(registerUser.pending, (state)=>{
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                state.message = "User is registered successfully!"
            })
            .addCase(registerUser.rejected, (state, action)=>{
                state.loading = false;
                state.user = null;
                if(action.error.message === 'Request failed with status code 500'){
                    state.error = ' Register is not completed!' 
                }else{
                    state.error = action.error.message;
                }
            })

            


        }
});

export default userSlice.reducer;