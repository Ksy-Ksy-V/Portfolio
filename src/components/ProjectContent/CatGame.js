import React, { useEffect, useState, useRef } from 'react'
import { Grid } from '@mui/material'
import { animations } from '../../animation/animationData'

const CatGame = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const videoRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(
                        entry.target.getAttribute('data-index')
                    )
                    if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
                        setActiveIndex(index)
                    }
                })
            },
            { threshold: 0.9 }
        )

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video)
        })

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video)
            })
        }
    }, [])

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video instanceof HTMLVideoElement) {
                if (index === activeIndex) {
                    video.play()
                } else {
                    video.pause()
                }
            }
        })
    }, [activeIndex])

    return (
        <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            {Object.values(animations).map((animation, index) => (
                <Grid
                    key={index}
                    data-index={index}
                    ref={(el) =>
                        (videoRefs.current[index] = el?.querySelector('video'))
                    }
                    sx={{
                        transform:
                            index === activeIndex ? 'scale(1)' : 'scale(0.9)',
                        transition: 'transform 0.3s ease',
                        margin: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '3px solid',
                        borderColor:
                            index === activeIndex
                                ? 'primary.main'
                                : 'primary.dark',
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                >
                    <video
                        src={animation}
                        data-index={index}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        muted
                        loop
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CatGame
