import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tag from '../Tag/Tag'
import styles from './WorkflowCard.module.css'

gsap.registerPlugin(ScrollTrigger)

const EASE = 'power2.out'

const WorkflowCard = ({
    stage,
    randomDelay,
    randomDuration,
}) => {
    const cardRef = useRef(null)

    useLayoutEffect(() => {
        const el = cardRef.current
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
                    ease: EASE,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        end: 'top 35%',
                        scrub: 1.2,
                    },
                }
            )
        }, cardRef)

        return () => ctx.revert()
    }, [])

    const cardStyle = {
        '--card-animation-delay': `${randomDelay}s`,
        '--card-animation-duration': `${randomDuration}s`,
    }

    return (
        <div ref={cardRef} className={styles.card} style={cardStyle}>
            <div className={styles.content}>
                <div className={`${styles.number} heading-h2`}>
                    {stage.number}
                </div>

                <h2 className={`heading-h3 ${styles.title}`}>{stage.title}</h2>

                <div className={`${styles.description} body-text-regular`}>
                    {stage.description}
                </div>

                {stage.technologies && stage.technologies.length > 0 && (
                    <div className={styles.tags}>
                        {stage.technologies.map((tech, techIndex) => (
                            <Tag key={techIndex} technology={tech} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default WorkflowCard
