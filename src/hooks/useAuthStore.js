import { 
    loginWhitEmailPassword, 
    logoutFirebase, 
    registerUserWithEmailPassword, 
    signInWithGoogle 
} from "../firebase/providers";
import { chackingCredentials, login, logout, clearNotesLogout } from "../store";


export const useAuthStore = () => {

    const chekingAuthentication = ( email, password ) => {
        return async ( dispatch ) => {

            dispatch( chackingCredentials() );
        }
    };


    const startGoogleSignIn = () => {
        return async ( dispatch ) => {

            dispatch( chackingCredentials() );

            const result = await signInWithGoogle();
            if( !result.ok ) return dispatch( logout( result ) )

            dispatch( login( result ) );
        }
    };


    const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
        return async ( dispatch ) => {

            dispatch( chackingCredentials() );
            const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});
            
            if ( !ok ) return dispatch( logout( {errorMessage} ));

            dispatch( login({ uid, displayName, email, photoURL }) );
        }
    };


    const startLoginWithEmailPassword = ({ email, password }) => {
        return async(dispatch) => {

            dispatch( chackingCredentials() );
            const result = await loginWhitEmailPassword({ email, password });
            
            if( !result.ok ) return dispatch( logout( result ) )

            dispatch( login( result ) );
        }
    };


    const startLogout = () => {
        return async( dispatch ) => {
            await logoutFirebase();
            dispatch( clearNotesLogout() );
            dispatch( logout({ errorMessage: null }) );
        }
    };

    //!--------------------------MANTENIMIENTO--------------------------------------------------
    const startFacebookSignIn = () => {
        return async ( dispatch ) => {

            dispatch( chackingCredentials() );
        }
    };

    const startTwitterSignIn = () => {
        return async ( dispatch ) => {

            dispatch( chackingCredentials() );
        }
    };

    return {
        chekingAuthentication,
        startGoogleSignIn,
        startCreatingUserWithEmailPassword,
        startLoginWithEmailPassword,
        startLogout,
        startFacebookSignIn,
        startTwitterSignIn,
    };
}
