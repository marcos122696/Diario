import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { Google } from '@mui/icons-material'; /* Facebook, Twitter */ 

import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../index';
import { chekingAuthenticat } from '../../store/index';



export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange, reset, formState } = useForm({
        email: 'marcos@gogole.com',
        password: '123abc'
    });

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( chekingAuthentication() );
    };

    const onGoogleSignIn = ( event ) => {
        console.log('google sign');
    };

  return (
    <AuthLayout title="Login">
            <form onSubmit={ onSubmit }>
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
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button type="submit" variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant="contained" 
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                            </Button>
                        </Grid>
                        {/* <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
                                <Facebook>
                                    Facebook
                                </Facebook>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
                                <Twitter>
                                    Twitter
                                </Twitter>
                            </Button>
                        </Grid> */}
                    </Grid>

                    <Grid container direction="row" justifyContent="center">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Crear Cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>

  )
}
