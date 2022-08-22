import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";


export const NavBar = ({ drowerWidth = 240 }) => {
  return (
    <AppBar
        position="fixed"
        sx={{
            width:{ sm: `calc(100% - ${drowerWidth}px)` },
            ml: { sm: `${drowerWidth}px` },
        }}
    >
        <Toolbar>
            <IconButton 
                color="inherit"
                edge="start"
                sx={{
                    mr: 2,
                    display: { sm: 'none' },
                }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                >
                    JurnalApp</Typography>

                <IconButton color="error">
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
