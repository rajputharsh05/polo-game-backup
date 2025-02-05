import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, 
  tennis:0,
  cricket:0,
  soccer:0,
};

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    updateCriket: (state, action) => {
        state.cricket = action.payload; 
    },
    updateTennis: (state, action) => {
        state.tennis = action.payload; 
    },
    updateSoccer: (state, action) => {
        state.soccer = action.payload; 
    },
  },
});

export const { updateCriket, updateSoccer, updateTennis } = matchSlice.actions;
export default matchSlice.reducer; 
