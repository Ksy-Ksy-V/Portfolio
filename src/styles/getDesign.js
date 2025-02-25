import { createTheme } from '@mui/material/styles'

const getDesign = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: {
                      light: '#F3A7C0',
                      main: '#D63484',
                      dark: '#402B3A',
                  },
                  background: {
                      default: '#FDE2E4',
                      paper: '#F8F4EC',
                  },
                  text: {
                      primary: '#402B3A',
                  },
              }
            : {
                  primary: {
                      light: '#FF9BD2',
                      main: '#D63484',
                      dark: '#F8F4EC',
                  },
                  background: {
                      default: '#402B3A',
                      paper: '#402B3A',
                  },
                  text: {
                      primary: '#F8F4EC',
                  },
              }),
    },
    typography: {
        fontFamily: 'Bruno Ace, Inter, Arial, sans-serif',
        fontWeightLight: 200,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        body1: {
            fontFamily: 'Rhodium Libre, Arial, sans-serif',
            color: mode === 'light' ? '#402B3A' : '#F8F4EC',
        },
        h6: {
            fontFamily: 'Bruno Ace, Inter, Arial, sans-serif',
            color: mode === 'light' ? '#402B3A' : '#F8F4EC',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor:
                            mode === 'light' ? '#FF9BD2' : '#D63484',
                    },
                },
                outlined: {
                    border: `0px`,
                    color: mode === 'light' ? '#D63484' : '#FF9BD2',
                    '&:hover': {
                        border: `0px`,
                        backgroundColor: 'transparent',
                    },
                },
                text: {
                    color: mode === 'light' ? '#D63484' : '#FF9BD2',
                    '&:hover': {
                        backgroundColor:
                            mode === 'light' ? '#FF9BD2' : '#D63484',
                    },
                },
                root: {
                    border: `2px solid ${mode === 'light' ? '#402B3A' : '#F8F4EC'}`,
                    borderRadius: 0,
                    color: mode === 'light' ? '#D63484' : '#FF9BD2',
                    '&:hover': {
                        border: `2px solid ${mode === 'light' ? '#FF9BD2' : '#D63484'}`,
                    },
                },
            },
        },
    },
})

export default getDesign
