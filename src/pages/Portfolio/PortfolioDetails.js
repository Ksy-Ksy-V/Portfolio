import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

import Slider from "../../components/slider/Slider"; 
import StyledImage from "../../components/StyledImage"
import GitHubIcon from '@mui/icons-material/GitHub';
import { fullPageImagesDataOne } from '../../img/imagesData';

const PortfolioDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${id}`)  
      .then(response => response.json())
      .then(data => {
        setProject({
          ...data,
          imgSrc: fullPageImagesDataOne[data.id]   
        });
      })
      .catch(error => {
        console.error("There was an error fetching the project!", error);
      });
  }, [id]);

  if (!project) {
    return <Typography>Loading...</Typography>;
  }

  const { title, description, skills, feature, imgSrc, gitHubLink } = project;

  return (
    <Grid container spacing={0} columns={12}>
      <Grid item xs={12}>  
      <Typography 

        >
          {title}
      </Typography>

      </Grid>
      <Grid item xs={12}>  
        <Slider />
      </Grid>

      <Grid item xs={4}> 
        <Typography 
          display={'center'}
          textAlign={'center'}
          justifyContent='center'
          variant='h6' 
          color={'primary.main'} 
          sx={{
            '&:hover': {
            textDecoration: 'underline wavy'
            },
            marginBottom: '2rem',
            marginTop: '3rem',
          }}>
            {`< About project >`}
        </Typography>

        <Typography 
          display={'center'}
          textAlign={'center'}
          justifyContent='center'
          variant='body1'  
          sx={{
            marginBottom: '2rem',
            marginTop: '2rem',
          }}>
            {description}
        </Typography>

        <Button 
          fullWidth
          sx={{
            paddingLeft: '2rem',
            paddingRight: '2rem',
            marginTop:'2rem',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'transparent'
            },
          }}>
          See the app
        </Button>
      </Grid>

      <Grid item xs={4}> 
        <StyledImage 
            src={imgSrc} 
            alt={title} 
            sx={{ 
              margin: '1rem',
              width: '95%', 
            }} 
          />
      </Grid>
      <Grid item xs={4}> 
        <StyledImage 
            src={imgSrc} 
            alt={title} 
            sx={{ 
              margin: '1rem',
              width: '95%', 
            }} 
          />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '3px solid',  borderBottom: '3px solid', borderColor: 'primary.dark',}}>
            <Grid item xs={4}>
              <Box sx={{ 
                borderRight: '3px solid', 
                borderColor: 'primary.dark',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography
                  display={'center'}
                  textAlign={'center'}
                  justifyContent='center'
                  variant='h6'
                  color={'primary.dark'}
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline wavy'
                    },
                    marginTop: '1rem',
                  }}>
                  {`< Used technologies >`}
                </Typography>
                <List sx={{ marginLeft: '2rem' }}>
                  {skills.map((tech, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={`- ${tech}`}
                        primaryTypographyProps={{
                          variant: 'body',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{  
                borderColor: 'primary.dark', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography
                  display={'center'}
                  textAlign={'center'}
                  justifyContent='center'
                  variant='h6'
                  color={'primary.dark'}
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline wavy'
                    },
                    marginBottom: '2rem',
                    marginTop: '1rem',
                  }}>
                  {`< Project on GitHub  >`}
                </Typography>
                <Button
                  startIcon={<GitHubIcon />}
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    paddingLeft: '4rem',
                    paddingRight: '4rem',
                    marginTop: '2rem',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'transparent'
                    },
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ 
                borderLeft: '3px solid', 
                borderColor: 'primary.dark', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography
                  display={'center'}
                  textAlign={'center'}
                  justifyContent='center'
                  variant='h6'
                  color={'primary.dark'}
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline wavy'
                    },
                    marginTop: '1rem',
                  }}>
                  {`< A few feature >`}
                </Typography>
                <List sx={{ marginLeft: '2rem' }}>
                  {feature.map((tech, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={`- ${tech}`}
                        primaryTypographyProps={{
                          variant: 'body',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetails;
