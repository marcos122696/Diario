import { 
    loginWhitEmailPassword, 
    logoutFirebase, 
    registerUserWithEmailPassword, 
    signInWithGoogle 
} from "../../firebase/providers";
import { clearNotesLogout } from "../index";
import { chackingCredentials, login, logout } from "./authSlice";


export const chekingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );
    }
};

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );

        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch( logout( result ) )

        dispatch( login( result ) );
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});
        
        if ( !ok ) return dispatch( logout( {errorMessage} ));

        dispatch( login({ uid, displayName, email, photoURL }) );
    }
};


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch( chackingCredentials() );
        const result = await loginWhitEmailPassword({ email, password });
        
        if( !result.ok ) return dispatch( logout( result ) )

        dispatch( login( result ) );
    }
};

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout({ errorMessage: null }) );
    }
};

//--------------------------MANTENIMIENTO--------------------------------------------------
export const startFacebookSignIn = () => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );
    }
};

export const startTwitterSignIn = () => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );
    }
};

