import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab'
import { Typography, Box, Button } from '@mui/material'

import cinePeek from '../../img/icons/cinePeekSM.png'
import portfolio from '../../img/icons/portfolioSM.png'
import catGame from '../../img/icons/catSM.png'
import kito from '../../img/icons/kitoSM.png'

import cinePeekImg from '../../img/projectPrev01.jpg'
import catGameImg from '../../img/projectPrev02.png'
import kitoImg from '../../img/projectPrev03.png'

import StyledImage from '../StyledImage'

import { Link } from 'react-router-dom'

const TimeLine = () => {
    const projects = [
        {
            id: '1',
            title: 'CinePeek',
            date: 'April',
            icon: cinePeek,
            img: cinePeekImg,
            description:
                'This is a dynamic web application designed for movie and TV show enthusiasts.',
        },
        {
            title: 'Personal Page',
            date: 'July',
            icon: portfolio,

            description: 'This is portfolio site you are currently on.',
        },
        {
            id: '2',
            title: 'Cat Game',
            date: 'August',
            icon: catGame,
            img: catGameImg,
            description:
                'This is a 2D retro-style platformer with pixelated graphics reminiscent of classic arcade games.',
        },
        {
            id: '3',
            title: 'Kito',
            date: 'September - December',
            icon: kito,
            img: kitoImg,
            description:
                'This is a web app for anime fans to explore, organize, and track their favorite shows.',
        },
    ]

    return (
        <Timeline position="alternate" sx={{ marginTop: '5rem' }}>
            {projects.map((project, index) => (
                <TimelineItem key={index}>
                    {project.img ? (
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <StyledImage
                                src={project.img}
                                alt={project.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </TimelineOppositeContent>
                    ) : null}

                    <TimelineSeparator>
                        <Box
                            component="img"
                            src={project.icon}
                            alt={project.title}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        {index < projects.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: '6rem' }}>
                        <Typography sx={{ color: 'primary.light' }}>
                            {project.date}
                        </Typography>
                        <Typography
                            variant="h4"
                            component="span"
                            sx={{
                                color: 'primary.main',
                            }}
                        >
                            {project.title}
                        </Typography>

                        <Typography>{project.description}</Typography>

                        {project.id ? (
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
                        ) : null}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default TimeLine
