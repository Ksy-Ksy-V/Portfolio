import { useState } from 'react';
import { Typography, Button, Paper, MobileStepper, Box, Grid } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

import posterImg01 from "./../../img/projectPosterImg01.jpg";
import posterImg02 from "./../../img/projectPosterImg02.jpg";
import posterImg03 from "./../../img/projectPosterImg03.jpg";

const Slider = () => {

  const data = [
    {
      title: "ThousandReads",
      imgUrl: posterImg01,
      textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan vehicula lectus"
    },
    {
      title: "EverGreen",
      imgUrl: posterImg02,
      textContent: "Cras est diam, maximus sit amet est nec, fringilla pharetra risus"
    },
    {
      title: "Project 3",
      imgUrl: posterImg03,
      textContent: "Integer nec facilisis elit, et aliquet enim. Aliquam eu nunc et odio facilisis bibendum"
    },
    {
      title: "Project 4",
      imgUrl: posterImg01,
      textContent: "Nullam tempus tempus massa, ut posuere risus feugiat non. Aliquam erat volutpat"
    },
    {
      title: "Project 5",
      imgUrl: posterImg02,
      textContent: "Nullam tempus tempus massa, ut posuere risus feugiat non. Aliquam erat volutpat"
    },
    {
      title: "Project 6",
      imgUrl: posterImg03,
      textContent: "Nullam tempus tempus massa, ut posuere risus feugiat non. Aliquam erat volutpat"
    }
  ];

  const CollectionSize = data.length; 
  const [index, setActiveStep] = useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % CollectionSize);
  };

  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + CollectionSize) % CollectionSize);
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
    <Grid container>
      <Grid item xs={12} sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '2%',
            zIndex: 2, 
            padding: '1rem',
            borderRadius: '8px',
            maxWidth: '30%',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{
            color: 'primary.main',
            '&:hover': {
                textDecoration: 'underline wavy'
              }
          }}>{data[index].title}</Typography>
          <Typography variant="body1" color='primary.light'>{data[index].textContent}</Typography>
        </Box>
        <Box
          component="img"
          src={data[index].imgUrl}
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
          alt={data[index].title}
        />
        <Button
            variant="outlined"
          size="large"
          onClick={goToPrevPicture}
          sx={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)', 
            zIndex: 2,
          }}
        >
          <KeyboardArrowLeft />
        </Button>
        <Button
            variant="outlined"
          size="large"
          onClick={goToNextPicture}
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)', 
            zIndex: 2,
          }}
        >
          <KeyboardArrowRight />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <MobileStepper
          variant="dots"
          position="static"
          activeStep={index}
          steps={CollectionSize} 
          sx={{
            backgroundColor: "transparent",
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            justifyContent: 'center',
          }}
        />
      </Grid>
    </Grid>
  </Box>
);
}

export default Slider;
