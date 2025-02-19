import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import ModeSwitchBtn from './../SwithModeBtn/ModeSwithBtn'

const Navbar = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Box
                mr={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    color: 'primary.dark',
                    flex: 1,
                }}
            >
                <Typography
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color:
                            currentPath === '/'
                                ? 'primary.main'
                                : 'primary.dark',
                        '&:hover': {
                            textDecoration: 'underline wavy',
                            color: 'primary.main',
                        },
                    }}
                >
                    Home
                </Typography>

                <Typography
                    component={Link}
                    to="/portfolio"
                    sx={{
                        textDecoration: 'none',
                        color: currentPath.startsWith('/portfolio')
                            ? 'primary.main'
                            : 'primary.dark',
                        '&:hover': {
                            textDecoration: 'underline wavy',
                            color: 'primary.main',
                        },
                    }}
                >
                    Portfolio
                </Typography>

                <Typography
                    component={Link}
                    to="/contact"
                    sx={{
                        textDecoration: 'none',
                        color:
                            currentPath === '/contact'
                                ? 'primary.main'
                                : 'primary.dark',
                        '&:hover': {
                            textDecoration: 'underline wavy',
                            color: 'primary.main',
                        },
                    }}
                >
                    Contact
                </Typography>
            </Box>

            <Box mr={3}>
                <ModeSwitchBtn />
            </Box>
        </Box>
    )
}

export default Navbar
