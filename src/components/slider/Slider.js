import { useState } from 'react'
import { Typography, MobileStepper, Box, Grid } from '@mui/material'
import ArrowSliderButton from '../General/Buttons/ArrowSliderButton'
import useFetchProjects from '../../utils/useFetch'

const Slider = () => {
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
        <Grid
            container
            sx={{ overflow: 'hidden', position: 'relative' }}
            mt={'2rem'}
        >
            <Grid item xs={12}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0%',
                        left: '2%',
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="h4"
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
                    {/* <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline wavy',
              },
            }}
            {projects[index].title}
          >
          </Typography> */}

                    {/* <Typography variant="body1" color="primary.light">
            {projects[index].description}
          </Typography> */}
                </Box>

                <Box
                    component="img"
                    src={projects[index].imgUrl}
                    sx={{
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    alt={projects[index].title}
                />

                <ArrowSliderButton direction="left" onClick={goToPrevPicture} />
                <ArrowSliderButton
                    direction="right"
                    onClick={goToNextPicture}
                />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
        </Grid>
    )
}

export default Slider
