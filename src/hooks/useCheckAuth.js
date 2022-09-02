import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout, startLoadingNotes } from '../store/index';


export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

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
