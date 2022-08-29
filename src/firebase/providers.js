import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    updateProfile } 
from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }

    } catch (error) {
        
        const errorMessage = error.message === "Firebase: Error (auth/popup-closed-by-user)." ? "Ventana emergente cerrada :(" : error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
};


export const registerUserWithEmailPassword  = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } )
        return {
            ok: true,
            email, displayName, uid, photoURL
        }

    } catch (error) {

        const errorMessage = error.message === "Firebase: Error (auth/email-already-in-use)." ? "Este usuario ya existe" : error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
};


export const loginWhitEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { displayName, uid, photoURL } = resp.user;
        
        return {
            ok: true,
            email, displayName, uid, photoURL
        }

    } catch (error) {

        let errorMessage = null;
        if ( error.message === "Firebase: Error (auth/user-not-found)." ){
            errorMessage = "Este Email no esta registrado";
        } else if ( error.message === "Firebase: Error (auth/wrong-password).") {
            errorMessage = "Constraseña incorrecta";
        }

        return {
            ok: false,
            errorMessage,
        }
    }
};

export const logoutFirebase = async() => {  
    try {
        return await FirebaseAuth.signOut();
        
    } catch (error) {
            const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
};