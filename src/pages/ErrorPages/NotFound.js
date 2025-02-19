import { Link } from 'react-router-dom'
import { Grid, Box, Typography, Button, Container } from '@mui/material'

import RunningLine from './../../components/HeroSection/RunningLine'

const NotFound = () => {
    return (
        <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="7rem"
        >
            <Grid item xs={12} mb={2} sx={{}}>
                <RunningLine
                    text={`< Don't worry! >\u00A0\u00A0\u00A0\u00A0`}
                    direction="right"
                />
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        marginBottom: '3rem',
                        marginTop: '1rem',
                    }}
                >
                    <Typography
                        variant="h2"
                        color={'primary.dark'}
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                        mb={2}
                    >
                        Ooops...{'  '}
                        <Typography
                            component="span"
                            variant="h1"
                            ml={6}
                            sx={{
                                color: 'primary.light',
                                '&:hover': {
                                    textDecoration: 'underline wavy',
                                },
                            }}
                        >
                            {`404`}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="h4"
                        display="flex"
                        justifyContent="center"
                        color={'primary.dark'}
                        sx={{ marginBottom: '2rem' }}
                    >
                        {`< That page cannot be found>`}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mb={2} sx={{}}>
                <RunningLine
                    text={`< Don't worry! >\u00A0\u00A0\u00A0\u00A0`}
                />
            </Grid>
            <Grid item xs={6}>
                <Button
                    component={Link}
                    to={`/`}
                    fullWidth
                    sx={{
                        color: 'primary.dark',
                        border: '3px solid',
                        marginBottom: '2rem',
                        marginTop: '1rem',
                        '&:hover': {
                            border: '3px solid',
                            color: 'primary.main',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {`< Back to the homepage... >`}
                </Button>
            </Grid>
        </Grid>
    )
}

export default NotFound
