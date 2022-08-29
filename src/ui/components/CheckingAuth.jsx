import { CircularProgress, Grid, Typography } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
        <Grid
            item
            className="box-shadow"
            xs={ 6 }
            sx={{
                // width: { sm: 450, xl: 700 },
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2 
            }}
        >
            <CircularProgress color="warning" />
        </Grid>
    </Grid>
  )
}
