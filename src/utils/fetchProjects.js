import { useState, useEffect } from 'react'
import { sliderData } from '../img/imagesData'

const fetchProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/projects')
                if (!response.ok) {
                    throw new Error('Failed to fetch projects')
                }
                const data = await response.json()
                const projectsWithImages = data.map((project) => ({
                    ...project,
                    imgUrl: sliderData[project.id],
                }))
                setProjects(projectsWithImages)
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
