import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import RunningLine from '../../components/HeroSection/RunningLine'

import Slider from '../../components/Slider/Slider'
import StyledImage from '../../components/StyledImage'
import GitHubIcon from '@mui/icons-material/GitHub'
import { fullPageImagesDataOne } from '../../img/imagesData'

const PortfolioDetails = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject({
                    ...data,
                    imgSrc: fullPageImagesDataOne[data.id],
                })
            })
            .catch((error) => {
                console.error('There was an error fetching the project!', error)
            })
    }, [id])

    if (!project) {
        return <Typography>Loading...</Typography>
    }

    const { title, description, skills, imgSrc, gitHubLink } = project

    const skillsText = skills.join(' | ')

    return (
        <Grid container spacing={0} columns={12}>
            <Grid item xs={12}>
                <Typography>{title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Slider />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '2rem', marginBottom: '1rem' }}>
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
                    {`< About project >`}
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
