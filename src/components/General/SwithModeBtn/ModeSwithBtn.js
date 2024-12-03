import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from './ThemeProvider'
import { Box } from '@mui/material'

const ModeSwitchBtn = ({ children }) => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    const handleToggleTheme = () => {
        if (theme.palette.mode === 'dark') {
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
        }
        colorMode.toggleColorMode()
    }

    return (
        <Box
            onClick={handleToggleTheme}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
            }}
        >
            <IconButton color="inherit">
                {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
            {children}
        </Box>
    )
}

export default ModeSwitchBtn
