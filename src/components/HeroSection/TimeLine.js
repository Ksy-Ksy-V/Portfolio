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

import { projects } from './TimeLineData'
import StyledImage from '../StyledImage'

const TimeLine = () => {
    const [visibleItems, setVisibleItems] = useState([])
    const timelineRef = useRef(null)

    useEffect(() => {
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
                threshold: 0.7,
            }
        )

        const items = timelineRef.current.querySelectorAll('.timeline-item')
        items.forEach((item) => observer.observe(item))

        return () => {
            items.forEach((item) => observer.unobserve(item))
        }
    }, [])

    return (
        <Timeline
            ref={timelineRef}
            position="alternate"
            sx={{ marginTop: '4rem' }}
        >
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
            {projects.map((project, index) => (
                <TimelineItem
                    key={index}
                    className="timeline-item"
                    data-index={index}
                    sx={{
                        opacity: visibleItems.includes(index) ? 1 : 0,
                        transform: visibleItems.includes(index)
                            ? 'translateY(0px) scale(1)'
                            : 'translateY(50px) scale(0.8)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                >
                    {project.img ? (
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
                                }}
                            />
                        )}
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: '6rem' }}>
                        <Typography sx={{ color: 'primary.light' }}>
                            {project.date}
                        </Typography>
                        <Typography
                            component={Link}
                            to={`/portfolio-details/${projects[index].id}`}
                            variant="h4"
                            sx={{
                                textDecoration: 'none',
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
    )
}

export default TimeLine
