import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import MainHeader from '../../components/MainHeader'
import React from 'react'

import { imagesData } from '../../img/imagesData'

const PortfolioList = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/projects')
            .then((response) => response.json())
            .then((data) => {
                const projectsWithImages = data.map((project) => ({
                    ...project,
                    imgSrc: imagesData[project.id],
                }))
                setProjects(projectsWithImages)
            })
            .catch((error) => {
                console.error(
                    'There was an error fetching the projects!',
                    error
                )
            })
    }, [])

    if (!projects) {
        return <Typography>Loading...</Typography>
    }

    return (
        <Grid container spacing={2} columns={12}>
            <Grid item xs={12} display="flex" justifyContent="center">
                <MainHeader
                    textOne="Do you want see my"
                    highlightText="projects"
                    textTwo="?"
                    sx={{
                        marginTop: '2rem',
                        marginBottom: '2rem',
                    }}
                />
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            imgSrc={project.imgSrc}
                            buttonText="See more"
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PortfolioList
