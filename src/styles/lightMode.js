import { createTheme } from '@mui/material/styles';

const lightMode = createTheme({
  palette: {
    primary: {
      light: '#FF9BD2',
      main: '#D63484',
      dark: '#402B3A',
      background: '#F8F4EC'
    }
  },
  typography: {
    fontFamily: 'Bruno Ace, Inter, Arial, sans-serif',
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    color: 'primary.dark',
    body1: {
      fontFamily: 'Rhodium Libre, Arial, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#FF9BD2',
          },
        },
        outlined: {
          border: `0px`,
          color: '#D63484',
          '&:hover': {
            border: `0px`,
            backgroundColor: 'transparent',   
          },
          '&:active': {
            border: `0px`,
            backgroundColor: 'inherit',   
          },
        },
        text: {
          color: '#D63484',
          '&:hover': {
            backgroundColor: '#FF9BD2',
          },
        },
        root: {
          border: `2px solid #402B3A`,
          borderRadius: 0,
          color: '#D63484',
          '&:hover': {
            border: `2px solid #FF9BD2`
          }
        }
      }
    }
  }
});

export default lightMode;
