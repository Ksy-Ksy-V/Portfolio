import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function OpenOnTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        console.log('Pathname changed:', pathname)
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
