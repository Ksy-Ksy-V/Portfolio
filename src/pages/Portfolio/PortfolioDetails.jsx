import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import fetchProjects from '../../utils/fetchProjects'
import styles from './PortfolioDetails.module.css'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import Loading from '../../components/Sections/Loading/Loading'
import ErrorMessage from '../../components/Sections/ErrorMessage/ErrorMessage'

import ProjectHeaderWithImage from '../../components/Sections/PortfolioPage/ProjectHeaderWithImage'
import ProjectLinksBar from '../../components/Sections/PortfolioPage/ProjectLinksBar'
import AboutCard, {
    DESIGN_EMPHASIZES,
} from '../../components/Sections/PortfolioPage/AboutCard'
import DesignSystemCard from '../../components/Sections/PortfolioPage/DesignSystemCard'
import ArchitectureSection from '../../components/Sections/PortfolioPage/ArchitectureSection'
import DevelopmentProcessCard from '../../components/Sections/PortfolioPage/DevelopmentProcessCard'
import MultiDeviceScreenshotsSection from '../../components/Sections/PortfolioPage/MultiDeviceScreenshotsSection'
import PixelPlayDesktopSection from '../../components/Sections/PortfolioPage/PixelPlayDesktopSection'
import CharacterShowcaseSection from '../../components/Sections/PortfolioPage/CharacterShowcaseSection'

const PortfolioDetails = () => {
    const isMobile = useMediaQuery('(max-width: 767px)')

    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)

    const { projects, error } = fetchProjects()

    useEffect(() => {
        setLoading(true)
        if (projects.length > 0) {
            const selectedProject = projects.find((p) => p.id === id)
            if (selectedProject) {
                setProject(selectedProject)
                setLoading(false)
            } else {
                setLoading(false)
                console.error('Project not found!')
            }
        }
    }, [id, projects])

    if (loading) return <Loading />
    if (error) return <ErrorMessage />
    if (!project) return <ErrorMessage />

    const goToNextPicture = () => {
        const currentIndex = projects.findIndex((p) => p.id === id)
        const nextIndex = (currentIndex + 1) % projects.length
        const nextProject = projects[nextIndex]
        navigate(`/portfolio-details/${nextProject.id}`)
    }

    const goToPrevPicture = () => {
        const currentIndex = projects.findIndex((p) => p.id === id)
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length
        const prevProject = projects[prevIndex]
        navigate(`/portfolio-details/${prevProject.id}`)
    }

    const handleDotClick = (index) => {
        const targetProject = projects[index]
        navigate(`/portfolio-details/${targetProject.id}`)
    }

    const {
        title,
        description,
        link,
        developmentDescription,
        developmentLayers,
        developmentConclusion,
        dataFlowDiagram,
        architectureDiagramTitle,
        gitHubLink,
        sliderData,
        figmaLink,
        goals = [],
        designSystem,
        imagesData,
    } = project

    const descriptionParts =
        goals.length > 0 && description.includes(DESIGN_EMPHASIZES)
            ? description.split(DESIGN_EMPHASIZES)
            : null

    const currentIndex = projects.findIndex((p) => p.id === id)

    return (
        <div className={styles.container}>
            <ProjectHeaderWithImage
                title={title}
                sliderData={sliderData}
                projects={projects}
                currentIndex={currentIndex}
                onPrev={goToPrevPicture}
                onNext={goToNextPicture}
                onDotClick={handleDotClick}
                isMobile={isMobile}
            />

            <ProjectLinksBar
                gitHubLink={gitHubLink}
                link={link}
                figmaLink={figmaLink}
            />

            <section
                className={styles.projectDetailsSection}
                aria-label="Project details"
            >
                <div className={styles.projectDetailsGrid}>
                    <AboutCard
                        description={description}
                        goals={goals}
                        descriptionParts={descriptionParts}
                    />

                    <DesignSystemCard designSystem={designSystem} />

                    <ArchitectureSection
                        dataFlowDiagram={dataFlowDiagram}
                        architectureDiagramTitle={architectureDiagramTitle}
                    />

                    <DevelopmentProcessCard
                        developmentDescription={developmentDescription}
                        developmentLayers={developmentLayers}
                        developmentConclusion={developmentConclusion}
                        hasDataFlowDiagram={Boolean(dataFlowDiagram?.length)}
                    />
                </div>
            </section>

            {project.id === '2' && (
                <CharacterShowcaseSection title="Animated Characters" />
            )}

            {project.id === '2' ? (
                <PixelPlayDesktopSection />
            ) : (
                <MultiDeviceScreenshotsSection imagesData={imagesData} />
            )}
        </div>
    )
}

export default PortfolioDetails
