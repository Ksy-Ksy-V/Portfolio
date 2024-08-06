import React, { createContext, useMemo, useState, useEffect } from 'react'
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import getDesign from '../../../styles/getDesign'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    useEffect(() => {
        const existingPreference = localStorage.getItem('theme')
        localStorage.setItem('theme', 'light')
        if (existingPreference === 'light' || existingPreference === 'dark') {
            setMode(existingPreference)
            localStorage.setItem('theme', existingPreference)
        } else {
            setMode('light')
            localStorage.setItem('theme', 'light')
        }
    }, [localStorage.getItem('theme')])

    const theme = createTheme(getDesign(mode))

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ThemeProvider

