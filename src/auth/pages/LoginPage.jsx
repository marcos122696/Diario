import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Alert } from '@mui/material';
import { Google, Facebook, Twitter } from '@mui/icons-material'; /* Facebook, Twitter */ 

import { useForm, useSubmit } from '../../hooks';
import { AuthLayout } from '../index';

const formData = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const { onSubmit, onGoogleSignIn, onFacebookSignIn, onTwitterSignIn } = useSubmit();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  return (
    <AuthLayout title="Login">
            <form onSubmit={ onSubmit }
                className={ !!errorMessage ? "animate__animated animate__shakeX" : "" }
            >
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid 
                            item xs={ 12 }
                            display={ !!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>
                                { errorMessage }
                            </Alert>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                type="submit" 
                                variant="contained" 
                                fullWidth
                                onClick={ (e) => onSubmit( e, { email, password }) }
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                variant="contained" 
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                variant="contained" 
                                fullWidth
                                onClick={ onFacebookSignIn }
                            >
                                <Facebook />
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                variant="contained" 
                                fullWidth
                                onClick={ onTwitterSignIn }
                            >
                                <Twitter />
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center">
                        <Link 
                            sx={{
                                pointerEvents: `${ isAuthenticating ? 'none' : '' }`,
                            }}
                            component={ RouterLink } 
                            color="inherit" 
                            to="/auth/register"
                        >
                            Crear Cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>

  )
}
