import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../index';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Nombre" 
                            type="text" 
                            placeholder="Tu Nombre"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Typography xs={ 12 } sx={{ mb:1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link 
                            component={ RouterLink } 
                            color="inherit" 
                            to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>

  )
}
