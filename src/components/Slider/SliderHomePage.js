import { useState } from 'react'
import { Typography, MobileStepper, Box, Grid, Button } from '@mui/material'
import ArrowSliderButton from '../General/Buttons/ArrowSliderButton'
import useFetchProjects from '../../utils/useFetch'
import { Link } from 'react-router-dom'
import MainHeader from '../MainHeader'

const SliderHomePage = () => {
    const { projects, loading, error } = useFetchProjects()
    const CollectionSize = projects.length
    const [index, setActiveStep] = useState(0)

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % CollectionSize)
    }

    const goToPrevPicture = () => {
        setActiveStep(
            (prevActiveStep) =>
                (prevActiveStep - 1 + CollectionSize) % CollectionSize
        )
    }

    if (loading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error: {error}</Typography>

    return (
        <Grid container spacing={2} columns={12}>
            <Grid item xs={12}>
                <Typography
                    variant="h5"
                    color={'primary.dark'}
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="center"
                    sx={{
                        marginTop: '4rem',
                        '&:hover': {
                            textDecoration: 'underline wavy',
                        },
                    }}
                >{`< A bit about my projects: >`}</Typography>
            </Grid>

            <Grid item xs={12}>
                <ArrowSliderButton
                    direction="left"
                    onClick={goToPrevPicture}
                    sx={{
                        position: 'absolute',
                        left: '0',
                        transform: 'translateY(200%)',
                    }}
                />
                <ArrowSliderButton
                    direction="right"
                    onClick={goToNextPicture}
                    sx={{
                        position: 'absolute',
                        right: '0',
                        transform: 'translateY(200%)',
                    }}
                />
            </Grid>

            <Grid item xs={8} mb={4}>
                <Box
                    sx={{
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Box
                        component="img"
                        src={projects[index].imgUrl}
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        alt={projects[index].title}
                    />
                    <MobileStepper
                        variant="dots"
                        position="static"
                        activeStep={index}
                        steps={CollectionSize}
                        sx={{
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            bottom: '10px',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={4} mb={4}>
                <Box>
                    <Typography
                        variant="h5"
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                        gutterBottom
                        sx={{
                            color: 'primary.main',
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    >
                        {projects[index].title}
                    </Typography>
                    <Typography
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                    >
                        {projects[index].description}
                    </Typography>
                    <Button
                        component={Link}
                        to={`/portfoliodetails/${projects[index].id}`}
                        fullWidth
                        sx={{
                            border: '3px solid',
                            marginTop: '2rem',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: '3px solid',
                                borderColor: 'primary.light',
                            },
                        }}
                    >
                        {`< See more >`}
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SliderHomePage
