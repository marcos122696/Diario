import { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined, UploadOutlined, DeleteOutline } from "@mui/icons-material";
import { Button, Grid, Typography, IconButton, TextField } from "@mui/material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../index";
import { setActiveNote, startDeletingNote, startSaveNotes, startUploadingFiles } from "../../store/index";
import { orderDate } from "../../helpers/orderDate";


export const NoteView = () => {

    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const { active, messageSaved, isSaving } = useSelector( state => state.jurnal );
    const { title, body, date, onInputChange, formState } = useForm( active );

    const dateString = useMemo(() => {
        const currentDate = new Date( date );
        return currentDate.toUTCString();
    }, [ date ]);

    const {newDay, dayNumber, month, year, hour} = orderDate(dateString);

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

    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;
        
        dispatch( startUploadingFiles(target.files) );
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
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography 
            fontSize={ 39 } 
            fontWeight='light' 
        >
            { hour }, {newDay}day {dayNumber} {month} <b>{year}</b></Typography>
        </Grid>
        <Grid item>

            <input 
                type="file" 
                multiple
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display: 'none' }}
            />

            <IconButton
                sx={{ backgroundColor: "white" }}
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined />
            </IconButton>

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
