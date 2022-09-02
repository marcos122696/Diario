import { useSelector } from "react-redux";
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../index";
import { useMemo } from "react";



export const NoteView = () => {

    const { active } = useSelector( state => state.jurnal );
    const { title, body, date, onInputChange } = useForm( active );

    const dateString = useMemo(() => {
        const currentDate = new Date( date );
        return currentDate.toUTCString();
    }, [ date ]);

  return (
    <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography 
            fontSize={ 39 } 
            fontWeight='light' 
        >
            { dateString }</Typography>
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
                label="Título"
                fullWidth
                name="title"
                onChange={ onInputChange }
                value={ title }
                sx={{ border: 'none', mb: 1, backgroundColor: 'white' }}
            />

            <TextField 
                type="text"
                variant="filled"
                label="Descripcion"
                fullWidth
                multiline
                name="body"
                onChange={ onInputChange }
                value={ body }
                minRows={ 5 }
                sx={{ backgroundColor: 'white' }}
            />
        </Grid>

        <ImageGallery />
    </Grid>
  )
}
