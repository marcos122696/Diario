import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JurnalLayout, NoteView, NothingSelectedView } from '../index';



export const JurnalPage = () => {
  return (
    <JurnalLayout>
        
        <NothingSelectedView />

        {/* <NoteView /> */}

        <IconButton
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
