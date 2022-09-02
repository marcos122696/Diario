import { useDispatch } from 'react-redux';
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { startLogout } from '../../store/index';


export const NavBar = ({ drowerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    };

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
                    Tu Diario</Typography>

                <IconButton 
                    color="error"
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
