import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authSlice } from './index';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer: {
    auth: authSlice.reducer,
    },
})