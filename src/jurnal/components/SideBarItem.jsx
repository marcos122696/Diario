import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material"
import { Grid, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from "@mui/material";

import { useJurnalStore, useUiStore } from "../../hooks";


export const SideBarItem = ({ title = '', body, date, imageUrls = [], id }) => {
    // console.log(id);
    const dispatch = useDispatch();
    const { setActiveNote } = useJurnalStore();
    const { closeSidebar } = useUiStore();
    
    const newTitle = useMemo(() => {
        return title.length > 17 
            ? title.substring(0, 17) + '...'
            : title;
    }, [ title ]);

    const onActiveNote = () => {
        dispatch(setActiveNote({ title, body, date, imageUrls, id })); 
        dispatch(closeSidebar());
    };

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onActiveNote }>
            <ListItemIcon sx={{ color: 'white'}}>
                <TurnedInNot />
            </ListItemIcon>

            <Grid container display="flex" flexDirection="column" sx={{ color: 'white'}}> 
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ body } color="secondary"/>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
