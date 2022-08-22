import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { ImageGallery } from "../index";



export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button sx={{ padding: 2, color: 'white'}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
            />
        </Grid>

        <ImageGallery />
    </Grid>
  )
}
