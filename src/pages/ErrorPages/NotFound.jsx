import { Link } from 'react-router-dom'
import RunningLine from '../../components/Sections/TechStack/RunningLine'
import OutlineButton from '../../components/UI/Buttons/OutlineButton'
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.container}>
                <div className={styles.errorCode}>
                    <h1 className={`headline-h1 ${styles.oops}`}>
                        Ooops...
                    </h1>
                    <h1 className={`headline-h1 ${styles.code404}`}>
                        404
                    </h1>
                </div>

                <h2 className={`heading-h2 ${styles.message}`}>
                    {`< That page cannot be found >`}
                </h2>

                <div className={styles.divider}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>

                <div className={styles.buttonWrapper}>
                    <Link to="/" className={styles.link}>
                        <OutlineButton>
                            {`< Back to the homepage... >`}
                        </OutlineButton>
                    </Link>
                </div>
        </div>
    )
}

export default NotFound
