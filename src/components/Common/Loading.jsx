import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
                <div className={styles.spinnerRing}></div>
                <div className={styles.spinnerRing}></div>
                <div className={styles.spinnerRing}></div>
            </div>
            <h3 className={`heading-h3 ${styles.text}`}>
                {`< Loading... />`}
            </h3>
        </div>
    )
}

export default Loading
