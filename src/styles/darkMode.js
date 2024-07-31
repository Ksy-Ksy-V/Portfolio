import { createTheme } from '@mui/material/styles';

export const darkMode = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#FF9BD2',
        main: '#D63484',
        dark: '#F8F4EC',
        background: '#402B3A',
      },
    },
    typography: {
      fontFamily: 'Bruno Ace',
      fontWeightLight: 200,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      color: '#FFFFFF',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            border: '2px solid #FFFFFF',
            borderRadius: 0,
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#333333',
            },
          },
        },
      },
    },
  });

  export default darkMode;