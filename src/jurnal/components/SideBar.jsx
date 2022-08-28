import { Box, Drawer, Toolbar, Typography, Divider, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";



export const SideBar = ({ drowerWidth = 240 }) => {
    
    const { displayName } = useSelector( state => state.auth );
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
                    backgroundColor:'rgba(220, 220, 220, 0.1)',
                }}
            >
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                        <ListItem key={ text }>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                <Grid container >
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'Este es un texto nose no lo entiendo baby' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
