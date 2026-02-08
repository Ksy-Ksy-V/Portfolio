import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import OutlineButton from '../../UI/Buttons/OutlineButton'
import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
    const titleRef = useRef(null)
    const dot1Ref = useRef(null)
    const dot2Ref = useRef(null)
    const dot3Ref = useRef(null)
    const buttonRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
            tl.fromTo(
                titleRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 }
            )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    0.3
                )
            const dots = [dot1Ref.current, dot2Ref.current, dot3Ref.current].filter(Boolean)
            gsap.to(dots, {
                y: -10,
                scale: 1.2,
                opacity: 1,
                duration: 0.35,
                stagger: 0.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 0.4,
            })
        })

        return () => ctx.revert()
    }, [])

    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 ref={titleRef} className={`heading-h2 ${styles.title}`}>
                    {message ?? '< Something went wrong... >'}
                </h2>

                <div className={styles.divider}>
                    <span ref={dot1Ref} className={styles.dot} />
                    <span ref={dot2Ref} className={styles.dot} />
                    <span ref={dot3Ref} className={styles.dot} />
                </div>

                <div ref={buttonRef} className={styles.buttonWrapper}>
                    <OutlineButton onClick={handleReload}>
                        Try again
                    </OutlineButton>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage
