import React, { useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

const CustomSelection = () => {
    const theme = useTheme()

    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
            ::selection {
                background-color: ${theme.palette.primary.light};
                color: ${theme.palette.background.default};
            }
            ::-moz-selection {
                background-color: ${theme.palette.primary.light};
                color: ${theme.palette.background.default};
            }
        `
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [theme])

    return null
}

export default CustomSelection
