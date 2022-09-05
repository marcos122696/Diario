import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authSlice, uiSlice } from './index';
import { jurnalSlice } from './jurnal/jurnalSlice';

export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer: {
        auth: authSlice.reducer,
        jurnal: jurnalSlice.reducer,
        ui: uiSlice.reducer,
    },
})