import { useState } from 'react'
import { Heart } from 'lucide-react'

import styles from './ContactForm.module.css'

const getApiUrl = () => {
    if (typeof window === 'undefined') return '/api/contact'
    return window.location.origin + '/api/contact'
}

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [honeypot, setHoneypot] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [errors, setErrors] = useState({})

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        setErrors({})
        setSubmitting(true)

        try {
            const res = await fetch(getApiUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message, hp: honeypot }),
            })
            const text = await res.text()
            const data = text ? (() => { try { return JSON.parse(text) } catch { return {} } })() : {}

            if (!res.ok) {
                if (data.fields && typeof data.fields === 'object') {
                    setErrors(data.fields)
                } else {
                    setErrors({ form: data.error || 'Something went wrong. Please try again.' })
                }
                setSubmitting(false)
                return
            }

            setSucceeded(true)
        } catch (err) {
            setErrors({ form: err.message || 'Network error. Please try again.' })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            {!succeeded ? (
                <div className={styles.formCard}>
                    <h2 className={styles.heading}>{'< Any questions? >'}</h2>

                    <form onSubmit={handleSubmitForm} className={styles.form}>
                        <div className={styles.honeypot} aria-hidden="true">
                            <label htmlFor="hp">Leave empty</label>
                            <input
                                id="hp"
                                name="hp"
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        {errors.form && (
                            <p className={styles.errorText} role="alert">
                                {errors.form}
                            </p>
                        )}

                        <div className={styles.inputWrap}>
                            <input
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-invalid={Boolean(errors.name)}
                                aria-describedby={errors.name ? 'name-err' : undefined}
                            />
                            {errors.name && (
                                <p id="name-err" className={styles.errorText}>
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className={styles.inputWrap}>
                            <input
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email *"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? 'email-err' : undefined}
                            />
                            {errors.email && (
                                <p id="email-err" className={styles.errorText}>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className={styles.inputWrap}>
                            <textarea
                                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                                id="message"
                                name="message"
                                placeholder="Message *"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? 'message-err' : undefined}
                            />
                            {errors.message && (
                                <p id="message-err" className={styles.errorText}>
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={submitting}
                        >
                            {submitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            ) : (
                <div className={styles.successCard}>
                    <h2 className={styles.successTitle}>Thank you for your message!</h2>
                    <p className={styles.successText}>
                        I will get back to you as soon as possible.
                    </p>
                    <Heart className={styles.successIcon} aria-hidden />
                </div>
            )}
        </div>
    )
}

export default ContactForm
