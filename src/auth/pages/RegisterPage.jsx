import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField, Alert } from '@mui/material';

import { AuthLayout } from '../index';
import { useForm} from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/index';

const formData = {
    email: '',
    password: '',
    displayName: '',
};

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe tener un @' ],
    password: [ (value) => value.length >= 6, 'La contraseña debe de tener mas de 6 letras' ],
    displayName: [ (value) => value.length >= 1, 'El nombre es requerido' ],
};

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const { displayName, email, password, onInputChange, formState,
        emailValid, passwordValid, displayNameValid, isFormValid
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword(formState));
    };

  return (
    <AuthLayout title="Crear Cuenta">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre" 
                            type="text" 
                            placeholder="Tu Nombre"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
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
                        <Grid item xs={ 12 }>
                            <Button 
                                disabled={ isAuthenticating }
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Typography xs={ 12 } sx={{ mb:1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link 
                            sx={{
                                pointerEvents: `${ isAuthenticating ? 'none' : '' }`,
                            }}
                            component={ RouterLink } 
                            color="inherit" 
                            to="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>

  )
}
