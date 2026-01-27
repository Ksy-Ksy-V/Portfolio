import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import fetchProjects from '../../utils/fetchProjects'
import styles from './PortfolioDetails.module.css'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import OutlineButton from '../../components/UI/Buttons/OutlineButton'
import ProjectNavButton from '../../components/UI/Buttons/ProjectNavButton'
import { Figma, Github } from 'lucide-react'

import { AnimatedBackground } from '../../components/Sections/Hero/AnimatedBackground'

import Loading from '../../components/Sections/Loading/Loading'
import ErrorMessage from '../../components/Sections/ErrorMessage/ErrorMessage'

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
            const selectedProject = projects.find(
                (project) => project.id === id
            )
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
        const currentIndex = projects.findIndex((proj) => proj.id === id)
        const nextIndex = (currentIndex + 1) % projects.length
        const nextProject = projects[nextIndex]
        navigate(`/portfolio-details/${nextProject.id}`)
    }

    const goToPrevPicture = () => {
        const currentIndex = projects.findIndex((proj) => proj.id === id)
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
    } = project

    const DESIGN_EMPHASIZES = 'The design emphasizes:\n\n'
    const descriptionParts = goals.length > 0 && description.includes(DESIGN_EMPHASIZES)
        ? description.split(DESIGN_EMPHASIZES)
        : null

    const currentIndex = projects.findIndex((proj) => proj.id === id)

    return (
        <div className={styles.container}>
            <header className={styles.projectHeader}>
                <ProjectNavButton
                    direction="prev"
                    onClick={goToPrevPicture}
                    ariaLabel="Previous project"
                    iconSize={isMobile ? 32 : 48}
                />
                <div className={styles.projectTitleBlock}>
                    <p className={styles.projectContext}>{'< Project Details />'}</p>
                    <h2 className={`heading-h2 ${styles.projectTitle}`}>{title}</h2>
                </div>
                <ProjectNavButton
                    direction="next"
                    onClick={goToNextPicture}
                    ariaLabel="Next project"
                    iconSize={isMobile ? 32 : 48}
                />
            </header>

            <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <AnimatedBackground />
                    <img
                        src={sliderData}
                        alt={title}
                        className={styles.image}
                    />
                    <div className={styles.stepper}>
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                                onClick={() => {
                                    const targetProject = projects[index]
                                    navigate(`/portfolio-details/${targetProject.id}`)
                                }}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <nav className={styles.linksBar} aria-label="Project links">
                <div className={styles.linksBarSlot}>
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
                        <OutlineButton>
                            <Github size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                            GitHub
                        </OutlineButton>
                    </a>
                </div>
                <div className={styles.linksBarSlot}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
                        <OutlineButton alwaysGlow>See the app</OutlineButton>
                    </a>
                </div>
                <div className={styles.linksBarSlot}>
                    {figmaLink ? (
                        <a href={figmaLink} target="_blank" rel="noopener noreferrer" className={styles.linksBarButton}>
                            <OutlineButton>
                                <Figma size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                                Figma
                            </OutlineButton>
                        </a>
                    ) : null}
                </div>
            </nav>

            <section className={styles.projectDetailsSection} aria-label="Project details">
                <div className={styles.projectDetailsGrid}>
                    <div className={`${styles.aboutCard} ${styles.gridCellAbout}`}>
                        <p className={styles.contextTag}>{'< 01 />'}</p>
                        <h3 className={`heading-h4 ${styles.aboutTitle}`}>About the Project</h3>
                        <div className={`body-text-regular ${styles.description} ${styles.descriptionWithBreaks}`}>
                            {descriptionParts ? (
                                <>
                                    <span className={styles.descriptionBlock}>{descriptionParts[0]}</span>
                                    <span className={styles.descriptionBlock}>{DESIGN_EMPHASIZES.trim()}</span>
                                    <ul className={styles.aboutGoalsList}>
                                        {goals.map((goal, idx) => (
                                            <li key={idx} className={styles.aboutGoalsItem}>{goal}</li>
                                        ))}
                                    </ul>
                                    <span className={styles.descriptionBlock}>{descriptionParts[1]}</span>
                                </>
                            ) : (
                                <span className={styles.descriptionBlock}>{description}</span>
                            )}
                        </div>
                    </div>

                    <div className={`${styles.designSystemCard} ${styles.gridCellDesign}`}>
                        <p className={styles.contextTag}>{'< Design System />'}</p>
                        <div className={styles.dsSection}>
                            <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Colors</h4>
                            <div className={styles.colorSwatchesRow}>
                                <div className={styles.swatchItem}>
                                    <span className={styles.swatchLabel}>Primary</span>
                                    <span className={`${styles.swatch} ${styles.swatchPrimary}`} aria-hidden />
                                    <span className={styles.swatchHex}>#387171</span>
                                </div>
                                <div className={styles.swatchItem}>
                                    <span className={styles.swatchLabel}>Dark</span>
                                    <span className={styles.swatch} style={{ background: 'color-mix(in srgb, #387171 50%, transparent)' }} aria-hidden />
                                    <span className={styles.swatchHex}>#387171 50%</span>
                                </div>
                                <div className={styles.swatchItem}>
                                    <span className={styles.swatchLabel}>Light</span>
                                    <span className={styles.swatch} style={{ background: 'color-mix(in srgb, #387171 10%, transparent)' }} aria-hidden />
                                    <span className={styles.swatchHex}>#387171 10%</span>
                                </div>
                                <div className={styles.swatchItem}>
                                    <span className={styles.swatchLabel}>Secondary</span>
                                    <span className={styles.swatch} style={{ background: '#64fcf2' }} aria-hidden />
                                    <span className={styles.swatchHex}>#64fcf2</span>
                                </div>
                            </div>
                            <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Gradient</h4>
                            <div className={styles.dsRectBlock}>
                                <div className={styles.gradientBar} style={{ background: 'linear-gradient(90deg, #1d3335 0%, #2d151a 100%)' }} aria-hidden />
                            </div>
                            <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Text</h4>
                            <div className={styles.dsRectBlock}>
                                <div className={styles.gradientBarWithText} style={{ background: 'linear-gradient(270deg, #1d3335 0%, #2d151a 100%)' }}>
                                    <span className={styles.gradientBarText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam</span>
                                </div>
                            </div>
                            <h4 className={`heading-h4 ${styles.dsSectionTitle}`}>Typography</h4>
                            <div className={styles.typographySamples}>
                                <div className={styles.typoRow}>
                                    <span className={styles.typoAg} style={{ background: '#387171', color: '#fff', fontFamily: "'Karma', serif" }}>Ag</span>
                                    <span className={styles.typoLabel} style={{ fontFamily: "'Karma', serif" }}>Karma, serif</span>
                                </div>
                                <div className={styles.typoRow}>
                                    <span className={styles.typoAg} style={{ background: '#387171', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>Ag</span>
                                    <span className={styles.typoLabel} style={{ fontFamily: "'DM Sans', sans-serif" }}>DM Sans</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {dataFlowDiagram?.length > 0 ? (
                        <div className={`${styles.dataFlowDiagramSection} ${styles.gridCellDataFlow}`}>
                            <p className={styles.contextTag}>{'< Architecture />'}</p>
                            <h4 className={`heading-h4 ${styles.dataFlowTitle}`}>
                                {architectureDiagramTitle || 'System Flow'}
                            </h4>
                            <div className={styles.flowDiagram}>
                                {dataFlowDiagram.map((step, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className={styles.flowBlock}>
                                            <strong className={styles.flowBlockTitle}>{step.title}</strong>
                                            <span className={styles.flowBlockSubtitle}>{step.subtitle}</span>
                                        </div>
                                        {idx < dataFlowDiagram.length - 1 && (
                                            <div className={styles.flowArrow} aria-hidden>↓</div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.gridCellDataFlowEmpty} aria-hidden />
                    )}

                    <div className={`${styles.developmentCard} ${styles.gridCellDevelopment} ${!dataFlowDiagram?.length ? styles.gridCellDevelopmentFullWidth : ''}`}>
                        <p className={styles.contextTag}>{'< 02 />'}</p>
                        <h3 className={`heading-h4 ${styles.aboutTitle}`}>Development Process</h3>
                        <p className={`body-text-regular ${styles.description} ${styles.descriptionPreLine}`}>
                            {developmentDescription}
                        </p>
                        {developmentLayers?.length > 0 && (
                            <ul className={styles.developmentLayersList}>
                                {developmentLayers.map((layer, idx) => (
                                    <li key={idx} className={`body-text-regular ${styles.developmentLayersItem}`}>{layer}</li>
                                ))}
                            </ul>
                        )}
                        {developmentConclusion && (
                            <p className={`body-text-regular ${styles.description} ${styles.descriptionPreLine} ${styles.developmentConclusion}`}>
                                {developmentConclusion}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioDetails
