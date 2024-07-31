import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Box
      className='header'
      sx={{
        border: 3,
        mt: '1rem',
        borderColor: 'primary.dark',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={3}>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item mt={1} xs={12} ml={2} mb={1}>
              <Typography
                variant='h4'
                component={Link}
                to='/'
                className='logo'
                sx={{
                  textDecoration: 'none',
                  color: 'primary.dark'
                }}
              >
                KSY
              </Typography>
            </Grid>
            <Grid item xs={12} ml={2}>
              <Typography fontSize={10} variant='body2' color='primary.dark'>
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
              display: pathname === '/contact' ? 'none' : 'flex'
            }}
          >
            <Grid item>
              <a href='https://www.facebook.com/' className='btn'>
                <FacebookIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
              </a>
            </Grid>

            <Grid item>
              <a href='https://github.com/' className='btn'>
                <GitHubIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
              </a>
            </Grid>

            <Grid item>
              <a href='https://www.linkedin.com/' className='btn'>
                <LinkedInIcon sx={{ color: 'primary.dark', fontSize: '3rem' }} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: pathname === '/contact' ? 'none' : 'flex'
          }}
        >
          <Grid container display={'flex'} justifyContent={'center'}>
            <Typography mb={1} mt={1} variant='body' color='primary.dark'>
              Any questions?
            </Typography>
            <Button fullWidth sx={{ marginX: '1rem', marginBottom: '1rem' }} component={Link} to='/contact' variant='outlined'>
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
