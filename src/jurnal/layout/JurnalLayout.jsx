import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../index";

const drowerWidth = 280; 

export const JurnalLayout = ({ children }) => {
  return (
        <Box 
            sx={{ 
                display: 'flex', 
                backgroundColor: '#333',
                color: 'white',
            }}
        >
            <NavBar drowerWidth={ drowerWidth }/>

            <SideBar drowerWidth={ drowerWidth }/>

            <Box 
                component='main'
                sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    width:{ sm: `calc(100% - ${drowerWidth}px)` },
                }}
            >
                <Toolbar />
                
                { children }
            </Box>
        </Box>
    )
}
