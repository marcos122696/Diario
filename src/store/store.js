import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './index';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})