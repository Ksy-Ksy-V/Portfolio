import { useMemo, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { techStackData } from '../../../../data/HomePageData'
import styles from './RunningLine.module.css'

const REPEAT_COUNT = 10
const DURATION = 5

export function TechStackTicker() {
    const { technologies } = techStackData
    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    const repeatedSets = useMemo(
        () =>
            Array.from({ length: REPEAT_COUNT }, (_, setIndex) => (
                <span key={setIndex}>
                    <div className={styles.set}>
                        {technologies.map((tech, index) => (
                            <span key={`${setIndex}-${index}`}>
                                <span className={styles.text}>{tech}</span>
                                {index < technologies.length - 1 && (
                                    <span
                                        className={styles.separator}
                                        aria-hidden="true"
                                    >
                                        ●
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    {setIndex < REPEAT_COUNT - 1 && (
                        <span className={styles.separator} aria-hidden="true">
                            ●
                        </span>
                    )}
                </span>
            )),
        [technologies]
    )

    useLayoutEffect(() => {
        const track = trackRef.current
        if (!track) return

        const segmentWidth = track.offsetWidth / REPEAT_COUNT
        if (segmentWidth <= 0) return

        tweenRef.current = gsap.to(track, {
            x: -segmentWidth,
            duration: DURATION,
            ease: 'none',
            repeat: -1,
        })

        return () => {
            tweenRef.current?.kill()
        }
    }, [technologies])

    const handleMouseEnter = () => tweenRef.current?.pause()
    const handleMouseLeave = () => tweenRef.current?.play()

    return (
        <div
            className={styles.ticker}
            role="region"
            aria-label="Technology stack"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={trackRef} className={styles.track}>
                {repeatedSets}
            </div>
        </div>
    )
}

export default TechStackTicker
