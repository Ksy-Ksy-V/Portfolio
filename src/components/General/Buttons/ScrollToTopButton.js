import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Button } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={scrollToTop}
            disableRipple
            sx={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                display: isVisible ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                minWidth: 'auto',
                backgroundColor: 'transparent',
                border: '3px solid',
                borderColor: 'primary.dark',
                '&:hover': {
                    border: '3px solid',
                    borderColor: 'primary.main',
                    backgroundColor: 'transparent',
                },
            }}
        >
            <KeyboardArrowUpIcon sx={{ color: 'primary.main' }} />
        </Button>
    )
}

export default ScrollToTopButton
