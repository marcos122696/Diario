import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JurnalLayout, NoteView, NothingSelectedView } from '../index';
import { startNewNote } from '../../store/index';



export const JurnalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.jurnal );

    const onClickNewNote = () => {
        dispatch(startNewNote())
    };
    
  return (
    <JurnalLayout>
        
        {
            (!!active)
            ? <NoteView />
            : <NothingSelectedView />
        }

        <IconButton
            disabled={ isSaving }
            onClick={ onClickNewNote }
            size='large'
            sx={{
              color: 'white',
              backgroundColor: 'secondary.main',
              ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
        >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JurnalLayout>
  )
}
