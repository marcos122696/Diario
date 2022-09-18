import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined, DeleteOutline } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ButtonUploadImage, ImageGallery } from "../";
import { useForm, useJurnalStore } from "../../hooks";
import { orderDate } from "../../helpers";


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active, messageSaved, isSaving } = useSelector( state => state.jurnal );
    const { title, body, date, onInputChange, formState } = useForm( active );
    const { setActiveNote, startDeletingNote, startSaveNotes } = useJurnalStore();

    const dateString = useMemo(() => {
        const currentDate = new Date( date );
        return currentDate.toUTCString();
    }, [ date ]);

    const {newDay, dayNumber, month, year, /* hour */} = orderDate(dateString);

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState]);

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal.fire(
                'Nota actualizada',
                messageSaved,
                'success'
            )
        }
    }, [messageSaved]);
    
    const onSaveNote = () => {
        dispatch( startSaveNotes() );
    };

    const onDelete = () => {
        dispatch( startDeletingNote() );
    };

  return (
    <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        // sx={{ mb: 1, height: 'calc( 100vh - 56px )' }}
        // sx={{ mb: 1, height: '100vh' }}
        sx={{ mb: 1 }}
    >   

        <Grid 
            item 
            xs={ 12 }
            sx={{ 
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            <Typography 
            fontSize={ 39 } 
            fontWeight='light' 
        >
            {/* { hour }, */} {newDay}day {dayNumber} {month} <b>{year}</b></Typography>
        </Grid>
        <Grid 
            item 
            xs={ 12 } 
            justifyContent="center" 
            alignItems="center"
            sx={{ 
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >

        <ButtonUploadImage />

            <Button 
                disabled={ isSaving }
                onClick={onSaveNote} 
                sx={{ padding: 2, color: 'white'}}
            >
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

        <Grid container justifyContent="end">
            <Button
                onClick={ onDelete }
                sx={{ mt: 2 }}
                color="error"
            >
                <DeleteOutline />
                Borrar
            </Button>

        </Grid>

        <ImageGallery images={ active.imageUrls }/>
    </Grid>
  )
}
