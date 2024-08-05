import { Link, useLocation } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'

const Footer = () => {
    const { pathname } = useLocation()

    return (
        <Box
            className="header"
            sx={{
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
                    <Grid container display={'flex'} justifyContent={'center'}>
                        <Grid item xs={12} ml={2} mb={1}>
                            <Typography
                                variant="h5"
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
                    </Grid>
                </Grid>
                {pathname !== '/contact' && (
                    <>
                        <Grid item xs={6}>
                            <Grid
                                container
                                display={'flex'}
                                justifyContent={'center'}
                                spacing={5}
                                sx={{
                                    marginTop: '1rem',
                                    display:
                                        pathname === '/contact'
                                            ? 'none'
                                            : 'flex',
                                }}
                            >
                                <SocialLinks />
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                fontSize={10}
                                variant="body2"
                                color="primary.dark"
                            >
                                © 2024 Lorem ipsum dolor sit
                            </Typography>
                            {/* <Typography
                                    mb={1}
                                    mt={1}
                                    variant="body"
                                    color="primary.dark"
                                >
                                    Any questions?
                                </Typography>
                                <Button
                                    fullWidth
                                    sx={{
                                        marginX: '1rem',
                                        marginBottom: '1rem',
                                    }}
                                    component={Link}
                                    to="/contact"
                                >
                                    Contact
                                </Button> */}
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    )
}

export default Footer
