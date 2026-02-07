import { useState, useEffect } from 'react'

/**
 *
 * @returns {{ projects: object[], loading: boolean, error: string | null }}
 */
const useFetchProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('/db.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch projects')
                }
                const data = await response.json()
                setProjects(data.projects ?? [])
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { projects, loading, error }
}

export default useFetchProjects
