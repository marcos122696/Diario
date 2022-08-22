import { chackingCredentials } from "./authSlice";


export const chekingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch( chackingCredentials() );
    }
};