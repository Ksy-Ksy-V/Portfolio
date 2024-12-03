import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'

import SocialLinks from './SocialLinks'

const Footer = () => {
    const { pathname } = useLocation()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            sx={{
                border: '3px solid',
                borderColor: 'primary.dark',
                mt: '2rem',
                position: 'relative',
            }}
        >
            <Grid container alignItems="center">
                <Grid item xs={3} display="flex" justifyContent="flex-start">
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        className="logo"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.dark',
                            marginLeft: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        KSY
                    </Typography>
                </Grid>

                {isMobile && <Grid item xs={2} />}

                {!isMobile && (
                    <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="center"
                        sx={{ marginTop: '0.5rem' }}
                    >
                        {pathname === '/contact' ? (
                            <Box sx={{ width: '100%', height: '100%' }} />
                        ) : (
                            <SocialLinks />
                        )}
                    </Grid>
                )}

                <Grid
                    item
                    xs={isMobile ? 7 : 3}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Typography
                        fontSize={12}
                        variant="body1"
                        color="primary.dark"
                        sx={{
                            textAlign: 'right',
                            paddingRight: '2rem',
                            width: '100%',
                        }}
                    >
                        Copyright © 2024 Ksy®.{'\n'}All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
