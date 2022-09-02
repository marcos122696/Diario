import { useSelector } from "react-redux";
import { Box, Drawer, Toolbar, Typography, Divider, List } from "@mui/material";

import { SideBarItem } from "../index";



export const SideBar = ({ drowerWidth = 240 }) => {
    
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.jurnal );
    const resolution = window.screen.width;

  return (
    <Box
        component="nav"
        sx={{ width: { sm: drowerWidth, flexShrink: { sm: 0 }, }, }}
    >
        <Drawer
            variant={ resolution > 600 ? "permanent" : "temporary" } 
            open={ resolution < 600 ? false : true } 
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box',
                    width: drowerWidth,
                    backgroundColor: '#333',
                    borderRight: '1px solid #262254',
                },
            }}
        >
            <Toolbar
                className="bar"
                sx={{
                    backgroundColor:'#333',
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="white"
                >
                    { displayName }
                </Typography>

            </Toolbar>
            <Divider sx={{ backgroundColor:'primary.main' }}/>

            <List
                sx={{
                    backgroundColor:'rgba(220, 220, 220, 0.3)',
                }}
            >
                {
                    /* notes.sort( ( a, b ) => (
                        b.date - a.date 
                    )) */notes.map( note => (
                        <SideBarItem key={ note.id } { ...note }/>
                    )) 
                }
            </List>
        </Drawer>
    </Box>
  )
}
