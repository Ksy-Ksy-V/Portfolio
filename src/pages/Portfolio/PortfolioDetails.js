import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Typography, Button, Box, MobileStepper } from '@mui/material'
import React from 'react'
import RunningLine from '../../components/HeroSection/RunningLine'
import useFetchImg from '../../utils/useFetchImg'
import StyledImage from '../../components/StyledImage'
import GitHubIcon from '@mui/icons-material/GitHub'
import { fullPageImagesDataOne } from '../../img/imagesData'
import SliderPortfolio from '../../components/Slider/SliderPortfolio'

const PortfolioDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)

    const { projects, loading, error } = useFetchImg()
    const collectionSize = projects.length
    const initialIndex = parseInt(id, 10) - 1
    const [index, setActiveStep] = useState(initialIndex)

    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject({
                    ...data,
                    imgSrc: fullPageImagesDataOne[data.id],
                })
                setActiveStep(Number(id) - 1)
            })
            .catch((error) => {
                console.error('There was an error fetching the project!', error)
            })
    }, [id])

    if (loading) return <Typography>Loading...</Typography>
    if (error) return <Typography>Error: {error}</Typography>
    if (!project) return <Typography>Loading...</Typography>

    const goToNextPicture = () => {
        const newIndex = (index + 1) % collectionSize
        setActiveStep(newIndex)
        navigate(`/portfolio-details/${projects[newIndex].id}`)
    }

    const goToPrevPicture = () => {
        const newIndex = (index - 1 + collectionSize) % collectionSize
        setActiveStep(newIndex)
        navigate(`/portfolio-details/${projects[newIndex].id}`)
    }

    const { title, description, skills, imgSrc, gitHubLink } = project

    const skillsText = skills.join(' | ')

    return (
        <Grid container spacing={0} columns={12}>
            <Grid
                item
                xs={12}
                sx={{
                    position: 'relative',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            >
                <SliderPortfolio
                    title={projects[index]?.title || title}
                    nextPicture={() => goToNextPicture()}
                    prevPicture={() => goToPrevPicture()}
                />
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
                        src={projects[index]?.imgUrl || imgSrc}
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        alt={projects[index]?.title || title}
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

            <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
                <RunningLine
                    text={`< Used: ${skillsText} >\u00A0\u00A0\u00A0\u00A0`}
                />
            </Grid>

            <Grid item xs={4}>
                <Typography
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="center"
                    variant="h6"
                    color={'primary.main'}
                    sx={{
                        '&:hover': {
                            textDecoration: 'underline wavy',
                        },
                        marginBottom: '2rem',
                        marginTop: '3rem',
                    }}
                >
                    {`< About ${projects[index]?.title} >`}
                </Typography>

                <Typography
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="center"
                    variant="body1"
                    sx={{
                        marginBottom: '2rem',
                        marginTop: '2rem',
                    }}
                >
                    {description}
                </Typography>

                <Button
                    fullWidth
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        marginTop: '2rem',
                        '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    See the app
                </Button>
                <Button
                    startIcon={<GitHubIcon />}
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        marginTop: '2rem',
                        '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    GitHub
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
        </Grid>
    )
}

export default PortfolioDetails
