import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase';
import { useAuthStore, useJurnalStore } from './';


export const useCheckAuth = () => {

    const dispatch = useDispatch();
    const { startLoadingNotes } = useJurnalStore();
    const { login, logout, status } = useAuthStore();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout( {errorMessage: null} ) );

            dispatch( login( user ) );
            dispatch( startLoadingNotes() );
        } );
    }, [])

    return {
        status
    }
};
