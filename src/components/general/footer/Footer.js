import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography, Button } from '@mui/material';
import Logo from "../header/Logo"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


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
            alignItems: 'center'
          }}
        >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <Box>
                    <Logo />
                    <Box marginLeft='2rem'>
                        <Typography variant='body' color='primary.dark' >
                            © 2024 Lorem ipsum dolor sit
                        </Typography>
                    </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box 
                    sx={{ 
                        display: pathname === '/contact' ? 'none' : 'flex', 
                        listStyle: 'none', 
                        padding: 0, 
                        justifyContent: 'space-between',
                        alignItems: 'center'  
                    }}
                    >
                        <Box>
                            <a href="https://www.facebook.com/" className="btn"> 
                            <FacebookIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
                            </a> 
                        </Box>

                        <Box>
                            <a href="https://github.com/" className="btn"> 
                            <GitHubIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
                            </a> 
                        </Box>

                        <Box>
                            <a href="https://www.linkedin.com/" className="btn"> 
                            <LinkedInIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
                            </a> 
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <Typography variant='h6' color='primary.dark'>
                            Any questions?
                        </Typography>
                        <Button 
                        component={Link} 
                        to="/contact" 
                        sx={{ 
                            width: '190px', 
                        }}>
                            Contact
                        </Button>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        );
      };

 
export default Footer;
