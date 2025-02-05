import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : true
}

const ballSlice = createSlice({
    name : "ball",
    initialState,
    reducers : {
        updateBall : (state , action) => {
            state.value = action.payload
        }
    }
})

export const {updateBall} = ballSlice.actions;
export default ballSlice.reducer;