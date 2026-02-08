import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import PortfolioDetails from './pages/Portfolio/PortfolioDetails'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/ErrorPages/NotFound'

import ScrollToTopButton from './components/Layout/Scroll/ScrollToTopButton'
import OpenOnTop from './utils/OpenOnTop'
import CustomSelection from './utils/CustomSelection'

import ThemeProvider from './components/Layout/Theme/ThemeProvider'

import PageWrapper from './components/Layout/PageWrapper'

function App() {
    return (
        <ThemeProvider>
            <Router>
                <CustomSelection />
                <OpenOnTop />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        }
                    />
                    <Route path="/portfolio" element={<Navigate to="/portfolio-details/1" replace />} />
                    <Route
                        path="/portfolio-details/:id"
                        element={
                            <PageWrapper>
                                <PortfolioDetails />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <PageWrapper>
                                <Contact />
                            </PageWrapper>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ScrollToTopButton />
            </Router>
        </ThemeProvider>
    )
}
export default App
