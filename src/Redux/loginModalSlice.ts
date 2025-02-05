import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : false,
};


const loginModalSlice = createSlice({
    name:"login",
    initialState,
    reducers : {
        updateState: (state , action) => {
            state.value = action.payload;
        }
    }
})


export const {updateState} = loginModalSlice.actions;
export default loginModalSlice.reducer;