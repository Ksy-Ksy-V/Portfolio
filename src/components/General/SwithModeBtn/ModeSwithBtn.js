import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from './ThemeProvider'

const ModeSwitchBtn = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return (
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    )
}

export default ModeSwitchBtn
