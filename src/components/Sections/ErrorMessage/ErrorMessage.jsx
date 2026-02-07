import React from 'react'
import OutlineButton from '../../UI/Buttons/OutlineButton'
import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={`heading-h2 ${styles.title}`}>
                    {message ?? '< Something went wrong... >'}
                </h2>

                <div className={styles.divider}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>

                <div className={styles.buttonWrapper}>
                    <OutlineButton onClick={handleReload}>
                        Try again
                    </OutlineButton>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage
