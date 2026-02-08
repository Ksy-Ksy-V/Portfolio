import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import styles from './Loading.module.css'

const Loading = () => {
    const containerRef = useRef(null)
    const ring1Ref = useRef(null)
    const ring2Ref = useRef(null)
    const ring3Ref = useRef(null)
    const textRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const rings = [ring1Ref.current, ring2Ref.current, ring3Ref.current].filter(Boolean)
            const delays = [0, 0.15, 0.3]
            rings.forEach((el, i) => {
                gsap.to(el, {
                    rotation: 360,
                    duration: 1.2,
                    ease: 'none',
                    repeat: -1,
                    delay: delays[i],
                })
            })
            gsap.to(textRef.current, {
                opacity: 0.6,
                duration: 1,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.spinner}>
                <div ref={ring1Ref} className={styles.spinnerRing} />
                <div ref={ring2Ref} className={styles.spinnerRing} />
                <div ref={ring3Ref} className={styles.spinnerRing} />
            </div>
            <h3 ref={textRef} className={`heading-h3 ${styles.text}`}>
                {`< Loading... />`}
            </h3>
        </div>
    )
}

export default Loading
