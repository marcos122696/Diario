import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // not-authenticated, authenticated 
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ( state, action ) => {

        },
        logout: ( state, payload ) => {

        },
        chackingCredentials: ( state ) => {
            state.status = 'checking'
        }
    }
});

export const { login, logout, chackingCredentials } = authSlice.actions;