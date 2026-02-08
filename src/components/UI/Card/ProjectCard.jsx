import { useCallback, useRef, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tag from '../Tag/Tag'
import OutlineButton from '../Buttons/OutlineButton'
import styles from './ProjectCard.module.css'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({
    project,
    index,
    isFirst,
    isLast,
    scrollAnimationDelay = 0,
}) => {
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const isReverse = index % 2 === 1

    useLayoutEffect(() => {
        const el = containerRef.current
        if (!el) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        end: 'top 35%',
                        scrub: 1.2,
                    },
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const handleNavigate = useCallback(() => {
        navigate(project.route)
    }, [navigate, project.route])

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleNavigate()
            }
        },
        [handleNavigate]
    )

    const timelineColumn = (
        <div className={styles.timelineColumn}>
            {!isFirst && <div className={styles.timelineLine} />}
            <div className={styles.timelineDot}>
                <div className={styles.timelineDotInner} />
            </div>
            {!isLast && <div className={styles.timelineLine} />}
        </div>
    )

    const randomDelay = Math.random() * 5
    const randomDuration = 12 + Math.random() * 8

    const imageSection = project.image ? (
        <div className={styles.imageWrapper}>
            <div
                className={styles.gradientBorder}
                style={{
                    '--card-animation-delay': `${randomDelay}s`,
                    '--card-animation-duration': `${randomDuration}s`,
                }}
            >
                <div
                    className={styles.gradientContent}
                    onClick={handleNavigate}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    aria-label={`View ${project.title} project`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div
            className={styles.placeholder}
            onClick={handleNavigate}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label={`View ${project.title} project`}
        >
            <div className={styles.placeholderText}>KSY</div>
        </div>
    )

    const infoSection = (
        <div className={styles.info}>
            {project.date && (
                <p className={`body-text-regular ${styles.date}`}>
                    {project.date}
                </p>
            )}
            <h2 className={`heading-h2 ${styles.title}`}>{project.title}</h2>
            <p className={`body-text-regular ${styles.description}`}>
                {project.description}
            </p>

            <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} technology={tag} />
                ))}
            </div>

            {project.route && project.route !== '/' && (
                <div className={styles.buttonWrapper}>
                    <OutlineButton onClick={handleNavigate}>
                        View Project →
                    </OutlineButton>
                </div>
            )}
        </div>
    )

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={isReverse ? styles.gridReverse : styles.grid}>
                {isReverse ? (
                    <>
                        {imageSection}
                        {timelineColumn}
                        {infoSection}
                    </>
                ) : (
                    <>
                        {infoSection}
                        {timelineColumn}
                        {imageSection}
                    </>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
