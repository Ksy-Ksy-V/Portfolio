import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useFetchProjects from '../../hooks/useFetchProjects'

gsap.registerPlugin(ScrollTrigger)
import {
    MOBILE_HEADER_IMAGES,
    PIXEL_PLAY_PROJECT_ID,
} from '../../data/portfolioConfig'
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
    const { projects, loading, error } = useFetchProjects()
    const gridRef = useRef(null)

    useLayoutEffect(() => {
        const grid = gridRef.current
        if (!grid) return
        const cards = Array.from(grid.children)
        const ctx = gsap.context(() => {
            cards.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            end: 'top 40%',
                            scrub: 1.2,
                        },
                    }
                )
            })
        }, grid)
        return () => ctx.revert()
    }, [id])

    const project = useMemo(
        () => projects.find((p) => p.id === id),
        [projects, id]
    )

    if (loading) return <Loading />
    if (error) return <ErrorMessage />
    if (projects.length > 0 && !project) {
        return <ErrorMessage message="< Project not found />" />
    }
    if (!project) return <Loading />

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

    const mobileImage = MOBILE_HEADER_IMAGES[project.id]
    const headerImage =
        isMobile && mobileImage
            ? `${process.env.PUBLIC_URL || ''}${mobileImage}`
            : sliderData

    return (
        <div className={styles.container}>
            <ProjectHeaderWithImage
                title={title}
                sliderData={headerImage}
                onPrev={goToPrevPicture}
                onNext={goToNextPicture}
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
                <div ref={gridRef} className={styles.projectDetailsGrid}>
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

            {project.id === PIXEL_PLAY_PROJECT_ID && (
                <CharacterShowcaseSection title="Animated Characters" />
            )}

            {project.id === PIXEL_PLAY_PROJECT_ID ? (
                <PixelPlayDesktopSection />
            ) : (
                <MultiDeviceScreenshotsSection imagesData={imagesData} />
            )}
        </div>
    )
}

export default PortfolioDetails
