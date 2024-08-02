import { Grid, Box, Typography, Button } from '@mui/material';

import Slider from "../../components/slider/Slider"; 

import previweImg01 from './../../img/projectPreviewImg01.jpg';
import previweImg02 from './../../img/projectPreviewImg02.jpg';
import previweImg03 from './../../img/projectPreviewImg03.jpg';

const PortfolioList = () => {


      return (

        <Grid container spacing={2} columns={12}>
            <Grid item xs={12}>
                <Slider />
            </Grid>

            <Grid item
            xs={12}
            display={'center'}
            textAlign={'center'}
            justifyContent='center'
                sx={{
                    display: 'flex',  
                    marginBottom: '2rem',
                }}
            >
                <Typography 
                    variant='h4' 
                    color={'primary.dark'} 
                    mt='6rem'
                >
                    {`< Do you want see my `}
                        <Typography
                        component='span'
                        variant='h4'
                        sx={{
                            color: 'primary.main',
                        }}
                        >
                            projects
                        </Typography>
                    {`? >`}
                </Typography>
            </Grid>
            <Grid item   xs={12} >
            <Grid container  textAlign={'center'} spacing={3}>
                <Grid item xs={4} >
                    <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< ThousandReads >`}
                    </Typography>
                    <Box
                        component='img'
                        src={previweImg01}
                        alt='Hero Section'
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
                    <Button fullWidth 
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

                <Grid item xs={4}>
                <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< EverGreen >`}
                    </Typography>

                    <Box
                        component='img'
                        src={previweImg02}
                        alt='Hero Section'
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
                    <Button fullWidth 
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

                <Grid item xs={4}>
                <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< Project 3 >`}
                    </Typography>

                    <Box
                        component='img'
                        src={previweImg03}
                        alt='Hero Section'
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
                    <Button fullWidth 
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
            
            <Grid item xs={4} >
            <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< Project 4 >`}
                    </Typography>

                <Box
                    component='img'
                    src={previweImg01}
                    alt='Hero Section'
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
                <Button fullWidth 
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

            <Grid item xs={4}>
            <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< Project 5 >`}
                    </Typography>

                <Box
                    component='img'
                    src={previweImg02}
                    alt='Hero Section'
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
                <Button fullWidth 
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

            <Grid item xs={4}>
            <Typography
                        variant='h6'
                        sx={{ 
                            marginBottom: '2rem',
                            '&:hover': {
                            textDecoration: 'underline wavy'
                            }
                        }}
                    >
                        {`< Project 6 >`}
                    </Typography>

                <Box
                    component='img'
                    src={previweImg03}
                    alt='Hero Section'
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
                <Button fullWidth 
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
        </Grid>
        </Grid>

        </Grid>

      );
}
 
export default PortfolioList;

