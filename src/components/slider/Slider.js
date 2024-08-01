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
    <Box>
        <Paper
          square
          elevation={0}
          sx={{
            height: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>{data[index].title}</Typography>
          <Typography>{data[index].textContent}</Typography>
        </Paper>
        <img
          src={data[index].imgUrl}
          sx={{ 
            width: "100%", 
            display: "block",
            overflow: "hidden",
          }}
          alt={data[index].title}
        />
        <MobileStepper
          variant="dots"
          position="static"
          activeStep={index}
          steps={CollectionSize}
          nextButton={
            <Button
              size="small"
              onClick={goToNextPicture}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={goToPrevPicture}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
    </Box>
  );
}

export default Slider;
