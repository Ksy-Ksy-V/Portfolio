import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Typography, Container } from '@mui/material'

import SocialLinks from './SocialLinks'
const Footer = () => {
    const { pathname } = useLocation()

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

                <Grid item xs={3} display="flex">
                    <Typography
                        fontSize={12}
                        variant="body1"
                        color="primary.dark"
                        sx={{ textAlign: 'right', paddingRight: '2rem' }}
                    >
                        Copyright © 2024 Ksy®.{'\n'}All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
