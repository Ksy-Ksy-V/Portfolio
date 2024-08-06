import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Typography, Container } from '@mui/material'

import SocialLinks from './SocialLinks'
const Footer = () => {
    const { pathname } = useLocation()

    return (
        <Container maxWidth="md" sx={{ marginBottom: '2rem' }}>
            <Box
                sx={{
                    border: '3px solid',
                    borderColor: 'primary.dark',
                    mt: '2rem',
                    position: 'relative',
                }}
            >
                <Grid container alignItems="center">
                    <Grid
                        item
                        xs={2}
                        display="flex"
                        justifyContent="flex-start"
                    >
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
                        xs={8}
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
                    <Grid item xs={2} display="flex" justifyContent="flex-end">
                        <Typography
                            variant="body1"
                            color="primary.dark"
                            sx={{
                                right: '2rem',
                            }}
                        >
                            © 2024 Lorem ipsum dolor sit
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
