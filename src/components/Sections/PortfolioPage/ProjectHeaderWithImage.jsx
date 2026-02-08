import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ProjectNavButton from '../../../components/UI/Buttons/ProjectNavButton'
import { AnimatedBackground } from '../Hero/AnimatedBackground'
import styles from './ProjectHeaderWithImage.module.css'

const DURATION = 0.6
const EASE = 'power2.out'

const ProjectHeaderWithImage = ({
    title,
    sliderData,
    onPrev,
    onNext,
    isMobile,
}) => {
    const contextRef = useRef(null)
    const titleRef = useRef(null)
    const imageSectionRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { duration: DURATION, ease: EASE } })
            tl.from(contextRef.current, { opacity: 0, y: 16 }, 0)
                .from(titleRef.current, { opacity: 0, y: 20 }, 0.15)
                .from(imageSectionRef.current, { opacity: 0, y: 24 }, 0.3)
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            <header className={styles.projectHeader}>
                <ProjectNavButton
                    direction="prev"
                    onClick={onPrev}
                    ariaLabel="Previous project"
                    iconSize={isMobile ? 32 : 48}
                />
                <div className={styles.projectTitleBlock}>
                    <p ref={contextRef} className={styles.projectContext}>
                        {'< Project Details />'}
                    </p>
                    <h2 ref={titleRef} className={`heading-h2 ${styles.projectTitle}`}>
                        {title}
                    </h2>
                </div>
                <ProjectNavButton
                    direction="next"
                    onClick={onNext}
                    ariaLabel="Next project"
                    iconSize={isMobile ? 32 : 48}
                />
            </header>

            <div ref={imageSectionRef} className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <AnimatedBackground />
                    <img
                        src={sliderData}
                        alt={title}
                        className={styles.image}
                    />
                </div>
            </div>
        </>
    )
}

export default ProjectHeaderWithImage
