import { createSlice } from '@reduxjs/toolkit';


export type AuthStateType = {
    logIn: boolean,
    user: string | null,
    permissions: any,
    token : string,
    userName : string,
} 

const initialState : AuthStateType = {
    logIn : false,
    user: null,
    permissions: {},
    token : "",
    userName : "",
}


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.logIn = true;
            state.user = action.payload.role;
            state.permissions = action.payload.permissions;
            state.token = action.payload.token;
            state.userName = action.payload.userName;
        },
        logout: (state) => {
            state.logIn = false;
            state.user = null;
            state.permissions = {}
            state.token = "";
        }
    }
})


export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;