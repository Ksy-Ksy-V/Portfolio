import React, { createContext, useMemo, useState, useEffect } from 'react'

export const ColorModeContext = createContext({ 
    mode: 'dark',
    toggleColorMode: () => {},
    theme: null
})

const getThemeColors = (mode) => {
    if (mode === 'light') {
        return {
            palette: {
                mode: 'light',
                primary: {
                    light: '#F8A1C4',
                    main: '#D63484',
                    dark: '#A61E5D',
                },
                background: {
                    default: '#FAFAFA',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#1B1B1F',
                    secondary: '#4A4A55',
                },
                divider: '#E6E6EB',
            },
        }
    } else {
        return {
            palette: {
                mode: 'dark',
                primary: {
                    light: '#ff9bd2',
                    main: '#D63484',
                    dark: '#fde2e4',
                },
                background: {
                    default: '#0A0A0F',
                    paper: '#0f0a15',
                },
                text: {
                    primary: '#F8F4EC',
                    secondary: '#F8F4EC',
                },
                divider: '#E6E6EB',
            },
        }
    }
}

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                const newMode = mode === 'light' ? 'dark' : 'light'
                setMode(newMode)
                localStorage.setItem('theme', newMode)
                applyTheme(newMode)
            },
            theme: getThemeColors(mode),
        }),
        [mode]
    )

    const applyTheme = (themeMode) => {
        const theme = getThemeColors(themeMode)
        const root = document.documentElement
        
        root.style.setProperty('--color-primary-light', theme.palette.primary.light)
        root.style.setProperty('--color-primary-main', theme.palette.primary.main)
        root.style.setProperty('--color-primary-dark', theme.palette.primary.dark)
        root.style.setProperty('--color-background-default', theme.palette.background.default)
        root.style.setProperty('--color-background-paper', theme.palette.background.paper)
        root.style.setProperty('--color-text-primary', theme.palette.text.primary)
        root.style.setProperty('--color-text-secondary', theme.palette.text.secondary || theme.palette.text.primary)
        root.style.setProperty('--color-divider', theme.palette.divider || '#E6E6EB')
        
        if (themeMode === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }

    useEffect(() => {
        const existingPreference = localStorage.getItem('theme')
        let initialMode = 'dark'
        
        if (existingPreference === 'light' || existingPreference === 'dark') {
            initialMode = existingPreference
        } else {
            initialMode = 'dark'
            localStorage.setItem('theme', 'dark')
        }
        
        setMode(initialMode)
        applyTheme(initialMode)
    }, [])

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    )
}

export default ThemeProvider
