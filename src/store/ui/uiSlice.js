import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openSidebar: ( state ) => {
            state.isOpen = true;
        },
        closeSidebar: ( state ) => {
            state.isOpen = false;
        },
    }
});

export const { openSidebar, closeSidebar } = uiSlice.actions;