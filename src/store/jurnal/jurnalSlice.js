import { createSlice } from '@reduxjs/toolkit';

export const jurnalSlice = createSlice({
    name: 'jurnal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'abc123',
        //     title: 'note',
        //     boady: 'afasdf',
        //     date: 1534163,
        //     imgaseUrls: [],
        // },

    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            
        },
        updateNote: ( state, action ) => {
            
        },
        deleteNoteById: ( state, action ) => {
            
        },
    }
});

export const { 
    savingNewNote,
    addNewEmptyNote, 
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deleteNoteById 
} = jurnalSlice.actions;