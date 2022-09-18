import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { useAuthStore } from "./useAuthStore";

// Esto deberia ser un "helper".
// This should be a "helper".

export const useSubmit = () => {

    const dispatch = useDispatch();
    const { startGoogleSignIn, startLoginWithEmailPassword } = useAuthStore();
    
    const onSubmit = ( event, { email, password } ) => {
        event.preventDefault();

        dispatch( startLoginWithEmailPassword({ email, password }) );
        
    };

    const onGoogleSignIn = ( event ) => {
        dispatch( startGoogleSignIn() );
    };

    const onFacebookSignIn = ( event ) => {
        // dispatch( startFacebookSignIn() );
        return Swal.fire(
            'Ups!!!',
            'Esta Funcion Aùn no esta disponible.',
            'warning'
        )
    };

    const onTwitterSignIn = ( event ) => {
        // dispatch( startTwitterSignIn() );
        return Swal.fire(
            'Ups!!!',
            'Esta Funcion Aùn no esta disponible.',
            'warning'
        )
    };


    return {
        onSubmit,
        onGoogleSignIn,
        onFacebookSignIn,
        onTwitterSignIn,
    }
}
