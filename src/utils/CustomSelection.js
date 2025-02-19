import React from 'react'
import { CssBaseline, useTheme } from '@mui/material'
import { GlobalStyles } from '@mui/system'

const CustomSelection = () => {
    const theme = useTheme()
    return (
        <>
            <CssBaseline />

            <GlobalStyles
                styles={{
                    '::selection': {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.background.default,
                    },
                }}
            />
        </>
    )
}

export default CustomSelection
