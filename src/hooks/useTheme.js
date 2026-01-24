import { useContext } from 'react'
import { ColorModeContext } from '../components/General/SwithModeBtn/ThemeProvider'

export const useTheme = () => {
    const context = useContext(ColorModeContext)
    
    if (!context) {
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
            breakpoints: {
                down: (size) => {
                    const sizes = {
                        xs: '575px',
                        sm: '767px',
                        md: '991px',
                        lg: '1199px',
                        xl: '1399px',
                    }
                    return `(max-width: ${sizes[size] || size})`
                },
                up: (size) => {
                    const sizes = {
                        xs: '576px',
                        sm: '768px',
                        md: '992px',
                        lg: '1200px',
                        xl: '1400px',
                    }
                    return `(min-width: ${sizes[size] || size})`
                },
            },
        }
    }
    
    return {
        palette: {
            mode: context.mode,
            primary: {
                light: context.theme.palette.primary.light,
                main: context.theme.palette.primary.main,
                dark: context.theme.palette.primary.dark,
            },
            background: {
                default: context.theme.palette.background.default,
                paper: context.theme.palette.background.paper,
            },
            text: {
                primary: context.theme.palette.text.primary,
                secondary: context.theme.palette.text.secondary || context.theme.palette.text.primary,
            },
            divider: context.theme.palette.divider || '#E6E6EB',
        },
        breakpoints: {
            down: (size) => {
                const sizes = {
                    xs: '575px',
                    sm: '767px',
                    md: '991px',
                    lg: '1199px',
                    xl: '1399px',
                }
                return `(max-width: ${sizes[size] || size})`
            },
            up: (size) => {
                const sizes = {
                    xs: '576px',
                    sm: '768px',
                    md: '992px',
                    lg: '1200px',
                    xl: '1400px',
                }
                return `(min-width: ${sizes[size] || size})`
            },
        },
    }
}

export default useTheme
