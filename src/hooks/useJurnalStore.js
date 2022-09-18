import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { useSelector } from 'react-redux';

import { FirebaseDB } from "../firebase";
import { fileUpload, loadNotes } from '../helpers';
import { addNewEmptyNote, 
    deleteNoteById, 
    savingNewNote, 
    setActiveNote, 
    setNotes, 
    setPhotosToActiveNote, 
    setSaving, 
    updateNote
} from '../store';

export const useJurnalStore = () => {


    const startNewNote = () => {
        return async( dispatch, getState ) => {
            
            dispatch( savingNewNote() );
            const { uid }  = getState().auth;
    
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
                imageUrls: [],
            };
    
            const newDoc = doc( collection( FirebaseDB, `${uid}/jurnal/notes` ) );
            await setDoc( newDoc, newNote );
    
            newNote.id = newDoc.id;
            // console.log(newNote);
    
            dispatch( addNewEmptyNote(newNote) );
            dispatch( setActiveNote( newNote ) );
        }
    };

    
    const startLoadingNotes = () => {
        return async( dispatch, getState ) => {
            
            const { uid }  = getState().auth;
            if ( !uid ) throw new error('El UID no existe');
            
            const notes = await loadNotes( uid );
            dispatch( setNotes( notes ) );
        }
    };
    
    
    const startSaveNotes = () => {
        return async( dispatch, getState ) => {
            
            dispatch( setSaving() );
    
            const { uid }  = getState().auth;
            const { active }  = getState().jurnal;
            // console.log(state);
    
            const noteToFirestore = { ...active };
            delete noteToFirestore.id;
    
            const docRef = doc( FirebaseDB, `${uid}/jurnal/notes/${active.id}` );
            await setDoc( docRef, noteToFirestore, { merge: true } );
            
            dispatch( updateNote( active ) ); 
        }
    };
    

    const startUploadingFiles = ( files = [] ) => {
        return async( dispatch ) => {
            dispatch( setSaving() );
            
            // await fileUpload( files[0] );
            const fileUploadPromises = [];
            for (const file of files) {
                fileUploadPromises.push( fileUpload(file) );
            }
    
            const photosUrls = await Promise.all( fileUploadPromises )
            
            dispatch( setPhotosToActiveNote(photosUrls) );
        }
    };
    

    const startDeletingNote = () => {
        return async( dispatch, getState ) => {
            
            const { uid }  = getState().auth;
            const { active }  = getState().jurnal;
    
            const docRef = doc( FirebaseDB, `${uid}/jurnal/notes/${active.id}`)
            await deleteDoc( docRef );
    
            dispatch( deleteNoteById(active.id) );
        }
    };

    return {
        //* Properties:
        addNewEmptyNote,
        deleteNoteById,
        savingNewNote,
        setActiveNote,
        setNotes,
        setPhotosToActiveNote,
        setSaving,
        updateNote,

        //* Methods:
        setActiveNote,
        startDeletingNote,
        startLoadingNotes,
        startNewNote,
        startSaveNotes,
        startUploadingFiles,
    };
}
