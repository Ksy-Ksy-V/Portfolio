import { Grid, Box, Typography } from '@mui/material';

import aboutMeImg from './../../img/aboutMe.jpg';

const AboutMe = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', padding: '2rem', marginTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} mt={2} sx={{ paddingLeft: 0 }}>
          <Box
            component='img'
            src={aboutMeImg}
            alt='Hero Section'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '3px solid',
              borderColor: 'primary.dark'
            }}
          />
        </Grid>
        <Grid item xs={6} mt={6}>
          <Box>
            <Typography
              variant='h5'
              color={'primary.main'}
              sx={{
                '&:hover': {
                  textDecoration: 'underline wavy'
                }
              }}
            >
              {`< About me! >`}
            </Typography>
            <Typography variant='body1' color={'primary.background'} mt='3rem'>
              {`< Anim ullamco ex amet ea magna duis ut irure cillum nulla. Dolore et anim aute id aute aliqua sint aute ut sint pariatur do ullamco. Mollit anim ex cupidatat ad exercitation minim anim deserunt anim do aliquip. Nulla culpa sint amet consectetur. >`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
