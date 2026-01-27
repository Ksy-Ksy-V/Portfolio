import PortfolioCard from '../../components/UI/Card/PortfolioCard'
import React from 'react'
import Loading from '../../components/Sections/Loading/Loading'
import ErrorMessage from '../../components/Sections/ErrorMessage/ErrorMessage'
import fetchProjects from '../../utils/fetchProjects'
import styles from './PortfolioList.module.css'

const PortfolioList = () => {
    const { projects, loading, error} = fetchProjects()

    if (loading) return <Loading />
    if (error) return <ErrorMessage />

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3 className={`heading-h3 ${styles.label}`}>
                    {`< Portfolio />`}
                    </h3>
                    <h2 className={`heading-h2 ${styles.title}`}>
                        My Projects
                    </h2>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <PortfolioCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            imgSrc={project.sliderData}
                            description={project.description}
                            skills={project.skills}
                            scrollAnimationDelay={index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioList
