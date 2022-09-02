import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#201560',
    },
    secondary: {
      main: '#542254',
    //   main: '#333333',
    },
    error: {
      main: red.A400,
    },
    dark: {
        main: 'rgba(34, 34, 34, 0.8)',
    },
  },
});