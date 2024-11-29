import { useState, useEffect } from 'react'

const fetchProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/db.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch projects')
                }
                const data = await response.json()
                setProjects(data.projects)
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

export default fetchProjects
