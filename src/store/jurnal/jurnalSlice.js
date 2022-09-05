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
            // El payload es la nota que quiero insertar
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            // El payload es la nota que quiero establecer en pantalla
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action) => {
            // El payload son las notas
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: ( state, action ) => {
            // El payload es la nota actualizada
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            });
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveNote: ( state, action ) => {
            // El payload es un arreglo de imagenes
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: ( state, action ) => {
            state.active = null;
            state.notes = state.notes.filter(
                note => note.id !== action.payload
            );
        },
    }
});

export const { 
    addNewEmptyNote, 
    clearNotesLogout,
    deleteNoteById, 
    savingNewNote,
    setActiveNote, 
    setNotes, 
    setPhotosToActiveNote,
    setSaving, 
    updateNote, 
} = jurnalSlice.actions;