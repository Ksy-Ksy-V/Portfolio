import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    Grid,
    Typography,
    Button,
    Box,
    MobileStepper,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import React from 'react'
import RunningLine from '../../components/HeroSection/RunningLine'
import fetchProjects from '../../utils/fetchProjects'
import GitHubIcon from '@mui/icons-material/GitHub'
import SliderPortfolio from '../../components/Slider/SliderPortfolio'
import Loading from './../../components/General/Loading'
import ErrorMessage from './../../components/General/ErrorMessage'

import CatGame from '../../components/ProjectContent/CatGame'
import ImageTabs from '../../components/ProjectContent/ImageTabs '
import FigmaIcon from '../../img/icons/FigmaIcon'

const PortfolioDetails = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)

    const { projects, error } = fetchProjects()

    useEffect(() => {
        setLoading(true)
        if (projects.length > 0) {
            const selectedProject = projects.find(
                (project) => project.id === id
            )
            if (selectedProject) {
                setProject(selectedProject)
                setLoading(false)
            } else {
                setLoading(false)

                console.error('Project not found!')
            }
        }
    }, [id, projects])
    console.log(loading, 'loading')

    console.log(error, 'errir')
    console.log(project, 'project')
    if (loading) return <Loading />
    if (error) return <ErrorMessage />
    if (!project) return <ErrorMessage />

    const goToNextPicture = () => {
        const currentIndex = projects.findIndex((proj) => proj.id === id)
        const nextIndex = (currentIndex + 1) % projects.length
        const nextProject = projects[nextIndex]
        navigate(`/portfolio-details/${nextProject.id}`)
    }

    const goToPrevPicture = () => {
        const currentIndex = projects.findIndex((proj) => proj.id === id)
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length
        const prevProject = projects[prevIndex]
        navigate(`/portfolio-details/${prevProject.id}`)
    }

    const {
        title,
        description,
        skills,
        link,
        developmentDescription,
        gitHubLink,
        sliderData,
        figmaLink,
    } = project

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
                    title={title}
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
                        src={sliderData}
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        alt={title}
                    />
                    <MobileStepper
                        variant="dots"
                        position="static"
                        activeStep={projects.findIndex(
                            (proj) => proj.id === id
                        )}
                        steps={projects.length}
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

            <Grid
                item
                xs={12}
                sx={{ marginBottom: isMobile ? '0rem' : '3rem' }}
            >
                <RunningLine
                    text={`< Used: ${skillsText} >\u00A0\u00A0\u00A0\u00A0`}
                />
            </Grid>

            <Grid
                item
                xs={isMobile ? 12 : 4}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: '5rem' }}
            >
                <Typography
                    display={'center'}
                    textAlign={'center'}
                    justifyContent="flex-start"
                    variant="h6"
                    color={'primary.main'}
                    sx={{
                        '&:hover': {
                            textDecoration: 'underline wavy',
                        },

                        marginBottom: '2rem',
                    }}
                >
                    {`< About ${title} >`}
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
                    {`< About ${title} development>`}
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

                {project.figmaLink ? (
                    <Button
                        startIcon={
                            <FigmaIcon
                                sx={{
                                    htmlColor: theme.palette.background.default,
                                }}
                                iconStyle={{
                                    fill: theme.palette.background.default,
                                }}
                            />
                        }
                        href={figmaLink}
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
                        Figma
                    </Button>
                ) : null}
            </Grid>

            {project.imagesData ? <ImageTabs project={project} /> : <CatGame />}
        </Grid>
    )
}

export default PortfolioDetails
