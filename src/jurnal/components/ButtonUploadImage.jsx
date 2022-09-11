import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { UploadOutlined } from "@mui/icons-material";

import { startUploadingFiles } from "../../store";


export const ButtonUploadImage = () => {

    const fileInputRef = useRef();
    const dispatch = useDispatch();
    const { isSaving } = useSelector( state => state.jurnal );

    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;
        
        dispatch( startUploadingFiles(target.files) );
    };

  return (
    <>
        <input 
            type="file" 
            multiple
            ref={ fileInputRef }
            onChange={ onFileInputChange }
            style={{ display: 'none' }}
        />

        
        <IconButton
            sx={{ backgroundColor: "white", borderRadius: '25px ' }}
            disabled={ isSaving }
            onClick={ () => fileInputRef.current.click() }
        >
            <UploadOutlined />
            Subir
        </IconButton>
    </>
  )
}
