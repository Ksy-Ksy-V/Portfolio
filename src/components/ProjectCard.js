import { Grid, Box, Typography, Button } from '@mui/material';

const ProjectCard = ({ title, imgSrc }) => {
  return (
    <Grid item xs={4}>
      <Typography
        display='flex' 
        justifyContent='center'
        variant='h6'
        sx={{ 
            marginBottom: '2rem',
            '&:hover': {
                textDecoration: 'underline wavy'
          }
        }}
      >
        {`< ${title} >`}
      </Typography>

      <Box
        component='img'
        src={imgSrc}
        alt={title}
        sx={{
            width: '100%',
            height: 'auto',
            aspectRatio: '1/1',
            objectFit: 'cover',
            border: '3px solid',
            borderColor: 'primary.dark',
            marginBottom: '2rem',
        }}
      />

      <Button 
        fullWidth 
        sx={{ 
          border: '3px solid',
          marginBottom: '2rem',
          '&:hover': { 
          backgroundColor: 'transparent',   
          },
        }}
      >
        {`< See more >`}
      </Button>

    </Grid>
  );
}

export default ProjectCard;