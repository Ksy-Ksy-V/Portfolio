import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Typography, Button, Box, MobileStepper } from '@mui/material'
import React from 'react'
import RunningLine from '../../components/HeroSection/RunningLine'
import fetchProjects from '../../utils/fetchProjects'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
    fullPageImagesDataOne,
    fullPageImagesDataTwo,
} from '../../img/imagesData'
import SliderPortfolio from '../../components/Slider/SliderPortfolio'
import Loading from './../../components/General/Loading'
import ErrorMessage from './../../components/General/ErrorMessage'
import CinePeek from '../../components/ProjectContent/CinePeek'
import CatGame from '../../components/ProjectContent/CatGame'

const PortfolioDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)

    const { projects, loading, error } = fetchProjects()
    const collectionSize = projects.length
    const initialIndex = parseInt(id, 10) - 1
    const [index, setActiveStep] = useState(initialIndex)

    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject({
                    ...data,
                    imgSrcOne: fullPageImagesDataOne[data.id],
                    imgSrcTwo: fullPageImagesDataTwo[data.id],
                })
                setActiveStep(Number(id) - 1)
            })
            .catch((error) => {
                console.error('There was an error fetching the project!', error)
            })
    }, [id])

    if (loading) return <Loading />
    if (error) return <ErrorMessage />
    if (!project) return <ErrorMessage />

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

    const {
        title,
        description,
        skills,
        imgSrcOne,
        imgSrcTwo,
        gitHubLink,
        link,
        developmentDescription,
    } = project

    const skillsText = skills.join(' | ')

    const projectProps = {
        imgSrcOne: project.imgSrcOne,
        imgSrcTwo: project.imgSrcTwo,
        title: project.title,
    }

    const getProjectComponent = (projectId, projectProps) => {
        switch (projectId) {
            case '1':
                return <CinePeek {...projectProps} />
            case '2':
                return <CatGame {...projectProps} />
            default:
                return <DefaultComponent {...projectProps} />
        }
    }

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
                        src={projects[index]?.imgUrl || imgSrcOne}
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

            <Grid item xs={12} sx={{ marginBottom: '3rem' }}>
                <RunningLine
                    text={`< Used: ${skillsText} >\u00A0\u00A0\u00A0\u00A0`}
                />
            </Grid>

            <Grid
                item
                xs={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
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
                    }}
                >
                    {description}
                </Typography>

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
                    }}
                >
                    {`< About ${projects[index]?.title} development>`}
                </Typography>

                <Typography
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="center"
                    variant="body1"
                >
                    {developmentDescription}
                </Typography>

                <Button
                    fullWidth
                    href={link}
                    target="_blank"
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

            {getProjectComponent(id, projectProps)}
        </Grid>
    )
}

export default PortfolioDetails
