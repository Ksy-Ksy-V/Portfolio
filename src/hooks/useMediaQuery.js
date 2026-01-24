import { useState, useEffect } from 'react'

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        
        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}

export const breakpoints = {
    down: (size) => {
        const sizes = {
            xs: '575px',
            sm: '767px',
            md: '991px',
            lg: '1199px',
            xl: '1399px',
        }
        return `(max-width: ${sizes[size] || size})`
    },
    up: (size) => {
        const sizes = {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1400px',
        }
        return `(min-width: ${sizes[size] || size})`
    },
}

export default useMediaQuery
