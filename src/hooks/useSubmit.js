import { useDispatch } from "react-redux";
import { 
    startGoogleSignIn, 
    startLoginWithEmailPassword, 
} 
from "../store/index";

// Esto deberia ser un "helper".
// This should be a "helper".

export const useSubmit = () => {

    const dispatch = useDispatch();
    
    const onSubmit = ( event, { email, password } ) => {
        event.preventDefault();

        dispatch( startLoginWithEmailPassword({ email, password }) );
        
    };

    const onGoogleSignIn = ( event ) => {
        dispatch( startGoogleSignIn() );
    };

    const onFacebookSignIn = ( event ) => {
        // dispatch( startFacebookSignIn() );
        return alert('en mantenimiento');
    };

    const onTwitterSignIn = ( event ) => {
        // dispatch( startTwitterSignIn() );
        return alert('en mantenimiento');
    };


    return {
        onSubmit,
        onGoogleSignIn,
        onFacebookSignIn,
        onTwitterSignIn,
    }
}
