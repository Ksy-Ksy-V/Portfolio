import { Grid, Box, Typography, Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const ContactInformation = () => {
    return (
        <Box sx={{ 
            textAlign: 'center', 
            justifyContent: 'center', 
            marginTop: 8 
        }}>
            <Typography 
                variant='h6' 
                color={'primary.light'} 
                sx={{
                    '&:hover': {
                        textDecoration: 'underline wavy'
                    }
                }}
            >
                {`< Contact information >`}
            </Typography>

            <Grid container spacing={2} columns={12} sx={{ marginTop: 2 }}>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <EmailOutlinedIcon 
                        sx={{ 
                            color: 'primary.dark', 
                            fontSize: '2rem', 
                            '&:hover': {
                                color: 'primary.main',
                            }
                        }} 
                    />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <Typography 
                        variant='body1'  
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        email@example.com
                    </Typography>
                </Grid>

                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LocalPhoneOutlinedIcon 
                        sx={{ 
                            color: 'primary.dark', 
                            fontSize: '2rem', 
                            '&:hover': {
                                color: 'primary.main',
                            }
                        }} 
                    />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end',}}>
                    <Typography 
                        variant='body1'  
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        +123 456 7890
                    </Typography>
                </Grid>

                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', }}>
                    <LocationOnOutlinedIcon 
                        sx={{ 
                            color: 'primary.dark', 
                            fontSize: '2rem',  
                            '&:hover': {
                                color: 'primary.main',
                            }
                        }} 
                    />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end',  }}>
                    <Typography 
                        variant='body1'  
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        Sofia, Bulgaria
                    </Typography>
                </Grid>
            </Grid>

            {/* <Button
                fullWidth
                startIcon={<GitHubIcon />}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ margin: '1rem' }}
                >
                GitHub
            </Button>

            <Button
                fullWidth
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ margin: '1rem' }}
                >
                LinkedIn
            </Button>

            <Button
                fullWidth
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ margin: '1rem' }}
                >
                Facebook
            </Button> */}

            <Grid item xs={12}>
                <Grid
                    container
                    display={'flex'}
                    justifyContent={'center'}
                    spacing={5}
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        marginTop: '1rem'
                    }}
                >
                    <Grid item>
                    <a href="https://www.facebook.com/" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon 
                        sx={{ 
                            color: 'primary.dark', 
                            fontSize: '3rem',
                            '&:hover': {
                            color: 'primary.main',
                            }
                        }} 
                        />
                    </a>
                    </Grid>

                    <Grid item>
                    <a href='https://github.com/'
                            className="btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                        <GitHubIcon sx={{ 
                            color: 'primary.dark', 
                            fontSize: '3rem', 
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }} />
                    </a>
                    </Grid>

                    <Grid item>
                    <a href='https://www.linkedin.com/'
                            className="btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                        <LinkedInIcon sx={{ 
                            color: 'primary.dark', 
                            fontSize: '3rem',
                            '&:hover': {
                                color: 'primary.main',
                            } 
                            }} />
                    </a>
                    </Grid>
                </Grid>
            </Grid>


        </Box>
    );
}

export default ContactInformation;
