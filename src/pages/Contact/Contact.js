import ContactForm from '../../components/Features/Contact/ContactForm'
import ContactInformation from '../../components/Features/Contact/ContactInformation'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.page}>
            <div className={styles.specks} aria-hidden="true" />
            <div className={styles.layout}>
                <div className={styles.colInfo}>
                    <ContactInformation />
                </div>
                <div className={styles.colForm}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
