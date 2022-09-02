import { useMemo } from "react";
import { TurnedInNot } from "@mui/icons-material"
import { Grid, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/jurnal/jurnalSlice";



export const SideBarItem = ({ title = '', body, date, imageUrls = [] }) => {
    
    const dispatch = useDispatch();
    
    const newTitle = useMemo(() => {
        return title.length > 17 
            ? title.substring(0, 17) + '...'
            : title;
    }, [ title ]);

    const onActiveNote = () => {
        dispatch(setActiveNote({ title, body, date, date, imageUrls })); 
    };

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onActiveNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>

            <Grid container display="flex" flexDirection="column"> 
                <ListItemText primary={ newTitle }/>
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
