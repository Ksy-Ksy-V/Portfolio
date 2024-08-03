import { Grid, Box, Typography, Button } from '@mui/material'
import heroSectionImg from './../../img/heroSection.jpg'
import MainHeader from '../MainHeader'
import StyledImage from '../StyledImage'

const HeroSection = () => {
    return (
        <Grid container spacing={2} marginBottom="2rem">
            <Grid item xs={6} sx={{ paddingLeft: 0 }}>
                <Box sx={{ ml: '2rem' }}>
                    <MainHeader
                        textOne="Hi! I'm"
                        highlightText="Ksenia"
                        textTwo="!"
                        sx={{ marginTop: '6rem' }}
                    />

                    <Typography variant="body" color={'primary.dark'} mt="1rem">
                        {`< A junior front end developer >`}
                    </Typography>
                    <Box sx={{ mt: '2rem' }}>
                        <Button
                            sx={{
                                paddingLeft: '2rem',
                                paddingRight: '2rem',
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <StyledImage
                    src={heroSectionImg}
                    alt="Hero Section"
                    sx={{
                        width: '70%',
                        height: 'auto',
                        marginTop: '2rem',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default HeroSection

