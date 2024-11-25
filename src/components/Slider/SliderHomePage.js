import { useState } from 'react'
import { Typography, MobileStepper, Box, Grid, Button } from '@mui/material'
import ArrowSliderButton from '../General/Buttons/ArrowSliderButton'
import fetchProjects from '../../utils/fetchProjects'
import { Link } from 'react-router-dom'
import Loading from './../../components/General/Loading'
import ErrorMessage from './../../components/General/ErrorMessage'

const SliderHomePage = () => {
    const { projects, loading, error } = fetchProjects()
    const collectionSize = projects.length
    const [index, setActiveStep] = useState(0)

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % collectionSize)
    }

    const goToPrevPicture = () => {
        setActiveStep(
            (prevActiveStep) =>
                (prevActiveStep - 1 + collectionSize) % collectionSize
        )
    }

    if (loading) return <Loading />
    if (error) return <ErrorMessage />

    return (
        <Grid
            container
            className="slider-home-page"
            spacing={2}
            columns={12}
            justifyContent={'center'}
        >
            <Grid item xs={12}>
                <Typography
                    variant="h5"
                    color={'primary.dark'}
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="center"
                    mt={`3rem`}
                >{`A bit about my projects:`}</Typography>
            </Grid>

            <Grid item xs={12}>
                <ArrowSliderButton direction="left" onClick={goToPrevPicture} />
                <ArrowSliderButton
                    direction="right"
                    onClick={goToNextPicture}
                />
            </Grid>

            <Grid
                item
                xs={8}
                mb={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        overflow: 'hidden',
                        position: 'relative',
                        marginLeft: '1rem',
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
                        steps={collectionSize}
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
                        to={`/portfolio-details/${projects[index].id}`}
                        fullWidth
                        sx={{
                            border: '3px solid',
                            marginTop: '2rem',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: '3px solid',
                                borderColor: 'primary.dark',
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
