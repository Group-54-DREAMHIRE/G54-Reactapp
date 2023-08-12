import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";
import { userLogin, userRegister, userChangePassword } from "../../api/authenticationService";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        const response = await userLogin(userCredentials);
        const user = response.data.user;
        const token = response.data.accessToken;
        localStorage.setItem('USER',JSON.stringify(user));
        localStorage.setItem("USERTYPE",response.data.userType);
        localStorage.setItem("TOKEN",token)
        return response.status;
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userCredentials) => {
        const response = await userRegister(userCredentials);
        return response.status;
    }
)

export const changePasswordUser = createAsyncThunk(
    'user/changePasswordUser',
    async(change) => {
        const response = await userChangePassword(change);
        console.log(response);
        return response.status;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem("TOKEN"),
        isLoggedIn: false,
        loading: false,
        message:"",
        messageChange:"",
        user:localStorage.getItem("USER"),
        error: null,
    },
    reducers:{
        logout: (state)=>{
            state.user = null
            state.token = null
        },
        success: (state)=>{
            state.error = null
            state.message = null
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
            
                state.loading = false;
                state.user = action.payload
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
                state.isLoggedIn = true;
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

            builder
            .addCase(changePasswordUser.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(changePasswordUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = null;
                state.messageChange = "Password is changed successfully!"
            })
            .addCase(changePasswordUser.rejected, (state, action)=>{
                state.loading = false;
                if(action.error.message === 'Request failed with status code 500'){
                    state.error = ' Register is not completed!' 
                }else{
                    state.error = action.error.message;
                }
            })
        }
});

export const { logout, success } = userSlice.actions;
export const getUser = (state) => state.user.user;
export default userSlice.reducer;