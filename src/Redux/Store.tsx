import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './lineMatchesSlice';
import ballSlice from './ballSlice';
import loginModalSlice from './loginModalSlice';
import AuthSlice from './AuthSlice.ts';

const store = configureStore({
  reducer: {
    match: counterReducer,
    ball : ballSlice,
    login : loginModalSlice,
    auth : AuthSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
