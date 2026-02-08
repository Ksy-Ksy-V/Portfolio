import { useState, useEffect } from 'react'

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const buttonStyle = {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3rem',
        height: '3rem',
        borderRadius: '0.5rem',
        backgroundColor: 'transparent',
        border: '2px solid var(--color-primary-dark)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        zIndex: 999,
    }

    const iconStyle = {
        width: '24px',
        height: '24px',
        fill: 'var(--color-primary-main)',
        transition: 'fill 0.3s ease',
    }

    return (
        <>
            <style>
                {`
                    .scroll-to-top-button:hover {
                        border-color: var(--color-primary-main);
                        box-shadow: 
                            0 0 10px var(--color-primary-main), 
                            0 0 20px var(--color-primary-main), 
                            0 0 30px var(--color-primary-main);
                    }
                    .scroll-to-top-button:hover svg {
                        fill: var(--color-primary-light);
                    }
                `}
            </style>
            <button
                className="scroll-to-top-button"
                onClick={scrollToTop}
                style={buttonStyle}
                aria-label="Scroll to top"
            >
                <svg
                    style={iconStyle}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
            </button>
        </>
    )
}

export default ScrollToTopButton
