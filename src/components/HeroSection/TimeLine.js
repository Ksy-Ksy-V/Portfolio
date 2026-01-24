import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab'
import { Typography, Box, Button } from '@mui/material'
import { useTheme } from '../../hooks/useTheme'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import { projects } from './TimeLineData'
import StyledImage from '../StyledImage'

const TimeLine = () => {
    const [visibleItems, setVisibleItems] = useState([])
    const timelineRef = useRef(null)
    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 767px)')

    useEffect(() => {
        const thresholdValue = isMobile ? 0.2 : 0.7

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(
                        entry.target.getAttribute('data-index'),
                        10
                    )
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [
                            ...new Set([...prev, index]),
                        ])
                    } else {
                        setVisibleItems((prev) =>
                            prev.filter((item) => item !== index)
                        )
                    }
                })
            },
            {
                threshold: thresholdValue,
            }
        )

        const items = timelineRef.current.querySelectorAll('.timeline-item')
        items.forEach((item) => observer.observe(item))

        return () => {
            items.forEach((item) => observer.unobserve(item))
        }
    }, [isMobile])

    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    marginTop: '3rem',
                    color: 'primary.main',
                }}
            >
                {`< My Projects >`}
            </Typography>
            <Timeline
                ref={timelineRef}
                position={isMobile ? 'right' : 'alternate'}
                sx={{
                    mt: isMobile ? '1rem' : '1rem',
                }}
            >
                {!isMobile ? (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector
                                sx={{
                                    height: '4rem',
                                    width: '3px',
                                }}
                            />
                        </TimelineSeparator>
                        <TimelineContent />
                    </TimelineItem>
                ) : null}

                {projects.map((project, index) => (
                    <TimelineItem
                        key={index}
                        className="timeline-item"
                        data-index={index}
                        sx={{
                            border: isMobile ? 'solid' : 'none',
                            borderColor: theme.palette.primary.main,
                            marginTop: isMobile ? '1rem' : '0rem',
                            borderRadius: '15px',
                            opacity: visibleItems.includes(index) ? 1 : 0,
                            transform: visibleItems.includes(index)
                                ? 'translateY(0px) scale(1)'
                                : 'translateY(50px) scale(0.8)',
                            transition:
                                'opacity 0.6s ease, transform 0.6s ease',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                        }}
                    >
                        {project.img && !isMobile ? (
                            <TimelineOppositeContent
                                component={Link}
                                to={`/portfolio-details/${projects[index].id}`}
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
                                        transform: visibleItems.includes(index)
                                            ? 'scale(1)'
                                            : 'scale(0.8)',
                                        transition: 'transform 0.6s ease',
                                    }}
                                />
                            </TimelineOppositeContent>
                        ) : null}

                        {!isMobile && (
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
                                        transform: visibleItems.includes(index)
                                            ? 'scale(1)'
                                            : 'scale(0.8)',
                                        transition: 'transform 0.6s ease',
                                    }}
                                />
                                {index < projects.length && (
                                    <TimelineConnector
                                        sx={{
                                            width: '3px',
                                            height: '4rem',
                                        }}
                                    />
                                )}
                            </TimelineSeparator>
                        )}
                        <TimelineContent
                            sx={{
                                mb: isMobile ? '1rem' : '6rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'primary.light',
                                    textAlign: isMobile ? 'center' : 'auto',
                                }}
                            >
                                {project.date}
                            </Typography>
                            <Typography
                                component={Link}
                                to={`/portfolio-details/${projects[index].id}`}
                                variant="h4"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                    textAlign: isMobile ? 'center' : 'auto',
                                    display: 'block',
                                }}
                            >
                                {project.title}
                            </Typography>

                            <Typography
                                sx={{ textAlign: isMobile ? 'center' : 'auto' }}
                            >
                                {project.description}
                            </Typography>

                            {project.img && isMobile ? (
                                <TimelineOppositeContent
                                    component={Link}
                                    to={`/portfolio-details/${projects[index].id}`}
                                >
                                    <StyledImage
                                        src={project.img}
                                        alt={project.title}
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            mt: '1rem',
                                            display: 'flex',
                                        }}
                                    />
                                </TimelineOppositeContent>
                            ) : null}

                            {project.id ? (
                                <Button
                                    component={Link}
                                    to={`/portfolio-details/${projects[index].id}`}
                                    fullWidth
                                    sx={{
                                        border: '3px solid',
                                        marginTop: '2rem',
                                        display: 'flex',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            border: '3px solid',
                                            borderColor: 'primary.main',
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
        </>
    )
}

export default TimeLine
