import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'

import Home from './pages/Home/Home'
import PortfolioList from './pages/Portfolio/PortfolioList'
import PortfolioDetails from './pages/Portfolio/PortfolioDetails'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/ErrorPages/NotFound'

import Header from './components/General/Header/Header'
import Footer from './components/General/Footer/Footer'
import ScrollToTopButton from './components/General/Buttons/ScrollToTopButton'
import OpenOnTop from './utils/OpenOnTop'

import ThemeProvider from './components/General/SwithModeBtn/ThemeProvider'

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Container
                    maxWidth="md"
                    sx={{
                        marginTop: '2rem',
                        minHeight: 'calc(100vh - 250px)',
                        marginBottom: '2rem',
                    }}
                >
                    <OpenOnTop />
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/portfolio"
                                element={<PortfolioList />}
                            />
                            <Route
                                path="/portfolio-details/:id"
                                element={<PortfolioDetails />}
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <ScrollToTopButton />
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    )
}
export default App
