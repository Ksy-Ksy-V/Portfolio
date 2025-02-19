import { Grid, Box, Typography, Button } from '@mui/material'
import heroSectionImg from './../../img/heroSection.jpg'
import MainHeader from '../MainHeader'
import StyledImage from '../StyledImage'

const HeroSection = () => {
    return (
        <Grid
            container
            spacing={2}
            marginBottom="2rem"
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
            }}
        >
            <Grid
                item
                xs={12}
                sm={6}
                sx={{ paddingLeft: 0, textAlign: { xs: 'center', sm: 'left' } }}
            >
                <Box>
                    <MainHeader
                        textOne="Hi! I'm"
                        highlightText="Ksenia"
                        textTwo="!"
                        sx={{
                            marginTop: {
                                xs: '2rem',
                                sm: '6rem',
                            },
                        }}
                    />

                    <Typography
                        variant="body"
                        color="primary.dark"
                        mt="1rem"
                        sx={{
                            fontSize: {
                                xs: '1rem',
                                sm: '1.25rem',
                            },
                        }}
                    >
                        {` A junior front end developer `}
                    </Typography>
                    <Box sx={{ mt: '2rem' }}>
                        <Button
                            sx={{
                                paddingLeft: '2rem',
                                paddingRight: '2rem',
                                fontSize: {
                                    xs: '0.8rem',
                                    sm: '1rem',
                                },
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'center',
                        sm: 'end',
                    },
                }}
            >
                <StyledImage
                    src={heroSectionImg}
                    alt="Hero Section"
                    sx={{
                        width: {
                            xs: '90%',
                            sm: '70%',
                        },
                        height: 'auto',
                        marginTop: {
                            xs: '1rem',
                            sm: '2rem',
                        },
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default HeroSection
