import { Grid, Box, Typography, Button } from '@mui/material';

import heroSectionImg from './../../img/heroSection.jpg'

const HeroSection = () => {
    return (
    
        <Grid 
            container spacing={2} 
            marginBottom='2rem'
        >
            <Grid 
                item xs={6} 
                sx={{ paddingLeft: 0 }}>
                    <Box sx={{ ml: '2rem' }}>
                        <Typography variant='h4' color={'primary.dark'} mt='6rem'>
                            {`< Hi! I'm Ksenia >`}
                        </Typography>
                        <Typography variant='h6' color={'primary.dark'} mt='1rem'>
                            {`< A junior front end developer >`}
                        </Typography>
                        <Box sx={{ mt: '2rem' }}>
                            <Button variant='outlined'>Download CV</Button>
                        </Box>
                    </Box>
            </Grid>

            <Grid 
                item xs={6} 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
            >
                <Box
                    component='img'
                    src={heroSectionImg}
                    alt='Hero Section'
                    sx={{
                        width: '70%',
                        height: 'auto',
                        marginTop: '2rem',
                        border: '3px solid',
                        borderColor: 'primary.dark'
                    }}
                />
            </Grid>

        </Grid>

    );
}
 
export default HeroSection;