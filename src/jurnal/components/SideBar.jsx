import { useSelector, useDispatch } from "react-redux";
import { Box, Drawer, Toolbar, Typography, Divider, List, IconButton } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

import { SideBarItem } from "../index";
import { closeSidebar } from "../../store/index";



export const SideBar = ({ drowerWidth = 240 }) => {
    
    const dispatch = useDispatch();
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.jurnal );
    const { isOpen } = useSelector( state => state.ui );
    
    const onCloseSidebar = () => {
        dispatch( closeSidebar());
    };

    const resolution = window.screen.width;

  return (
    <Box
        component="nav"
        sx={{ width: { sm: drowerWidth, flexShrink: { sm: 0 }, }, }}
    >
        <Drawer
            variant={ isOpen ? "permanent" : "temporary" } 
            open={ isOpen } 
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
                    justifyContent: 'space-between'
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

                <IconButton
                onClick={ onCloseSidebar }
                display={ isOpen ? "" : "none"}
                sx={{color: 'white', justifyContent: "center"}}
            >
                <MenuOutlined />
            </IconButton>

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
