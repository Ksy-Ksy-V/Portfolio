import { useState } from 'react'
import { Typography, MobileStepper, Box, Grid, Button } from '@mui/material'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import useFetchProjects from '../../utils/useFetch'
import { Link, useParams } from 'react-router-dom'

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
        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} sx={{ position: 'relative' }}>
                <Button
                    variant="outlined"
                    size="large"
                    disableRipple
                    onClick={goToPrevPicture}
                    sx={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        color: 'primary.main',
                        '& .MuiButton-startIcon': {
                            color: 'primary.main',
                        },
                    }}
                >
                    <KeyboardArrowLeft sx={{ fontSize: '4rem' }} />
                    <Typography
                        variant="body1"
                        color="primary.light"
                        textAlign="center"
                    >
                        Prev
                        <br />
                        project
                    </Typography>
                </Button>

                <Button
                    variant="outlined"
                    size="large"
                    disableRipple
                    onClick={goToNextPicture}
                    sx={{
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        color: 'primary.main',
                        '& .MuiButton-endIcon': {
                            color: 'primary.main',
                        },
                    }}
                >
                    <Typography
                        variant="body1"
                        color="primary.light"
                        textAlign="center"
                    >
                        Next
                        <br />
                        project
                    </Typography>
                    <KeyboardArrowRight sx={{ fontSize: '4rem' }} />
                </Button>

                <Typography
                    variant="h4"
                    textAlign="center"
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
            </Grid>

            <Grid item xs={12} mb={4}>
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
        </Grid>
    )
}

export default Slider
