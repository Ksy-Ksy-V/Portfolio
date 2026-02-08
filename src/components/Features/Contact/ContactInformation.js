import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import SocialLinks from '../../Layout/Footer/SocialLinks'
import styles from './ContactInformation.module.css'

const ContactInformation = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{'< Contact information >'}</h2>

            <div className={styles.row}>
                <EmailOutlinedIcon className={styles.icon} aria-hidden />
                <p className={styles.text}>kseniia.voitikh@gmail.com</p>
            </div>

            <div className={styles.row}>
                <LocationOnOutlinedIcon className={styles.icon} aria-hidden />
                <p className={styles.text}>Sofia, Bulgaria</p>
            </div>

            <div className={styles.socials}>
                <SocialLinks />
            </div>
        </div>
    )
}

export default ContactInformation
