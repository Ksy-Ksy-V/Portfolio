import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ModeSwitchBtn from './ModeSwithBtn'

const Navbar = () => {
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
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'primary.dark',
                    flex: 1,
                }}
            >
                <Typography
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.dark',
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
                        color: 'primary.dark',
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
                        color: 'primary.dark',
                        '&:hover': {
                            textDecoration: 'underline wavy',
                            color: 'primary.main',
                        },
                    }}
                >
                    Contact
                </Typography>
            </Box>

            <Box>
                <ModeSwitchBtn />
            </Box>
        </Box>
    )
}

export default Navbar
