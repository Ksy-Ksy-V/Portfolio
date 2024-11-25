import { Grid } from '@mui/material'
import ProjectCard from '../../components/ProjectCard'
import MainHeader from '../../components/MainHeader'
import React from 'react'
import Loading from '../../components/General/Loading'
import ErrorMessage from './../../components/General/ErrorMessage'

const PortfolioList = () => {
    const { projects, loading, error } = fetchProjects()

    if (loading) return <Loading />
    if (error) return <ErrorMessage />

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
