import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ContactForm from '../../components/Features/Contact/ContactForm'
import ContactInformation from '../../components/Features/Contact/ContactInformation'
import styles from './Contact.module.css'

const DURATION = 0.9
const EASE = 'power2.out'
const DELAY = 0.2

const Contact = () => {
    const colInfoRef = useRef(null)
    const colFormRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { duration: DURATION, ease: EASE }, delay: DELAY })
            tl.fromTo(
                colInfoRef.current,
                { opacity: 0, x: -36 },
                { opacity: 1, x: 0 }
            )
                .fromTo(
                    colFormRef.current,
                    { opacity: 0, x: 36 },
                    { opacity: 1, x: 0 },
                    0.2
                )
        })

        return () => ctx.revert()
    }, [])

    return (
        <section className={styles.page}>
            <div className={styles.specks} aria-hidden="true" />
            <div className={styles.layout}>
                <div ref={colInfoRef} className={styles.colInfo}>
                    <ContactInformation />
                </div>
                <div ref={colFormRef} className={styles.colForm}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
