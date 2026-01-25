import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollProgressIndicator from './Scroll/ScrollProgressIndicator'

const PageWrapper = ({ children }) => {
    return (
        <>
            <ScrollProgressIndicator />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default PageWrapper
