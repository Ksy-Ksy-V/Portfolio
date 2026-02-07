import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollProgressIndicator from './Scroll/ScrollProgressIndicator'
import styles from './PageWrapper.module.css'

const PageWrapper = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <ScrollProgressIndicator />
            <Header />
            <main className={styles.content}>
                {children}
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}

export default PageWrapper
