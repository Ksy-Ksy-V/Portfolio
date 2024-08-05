import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Typography, Container } from '@mui/material'

import SocialLinks from './SocialLinks'
const Footer = () => {
    const { pathname } = useLocation()

    return (
        <Container maxWidth="md" sx={{ marginBottom: '2rem' }}>
            <Box
                component={'footer'}
                className="header"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    border: 3,
                    mt: '1rem',
                    borderColor: 'primary.dark',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <Grid
                            container
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Grid item mt={1} xs={12} ml={2} mb={1}>
                                <Typography
                                    variant="h4"
                                    component={Link}
                                    to="/"
                                    className="logo"
                                    sx={{
                                        textDecoration: 'none',
                                        color: 'primary.dark',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    KSY
                                </Typography>
                            </Grid>
                            <Grid item xs={12} ml={2}>
                                <Typography
                                    fontSize={10}
                                    variant="body2"
                                    color="primary.dark"
                                >
                                    © 2024 Lorem ipsum dolor sit
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid
                            container
                            display={'flex'}
                            justifyContent={'center'}
                            spacing={5}
                            sx={{
                                display:
                                    pathname === '/contact' ? 'none' : 'flex',
                            }}
                        >
                            <SocialLinks />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
