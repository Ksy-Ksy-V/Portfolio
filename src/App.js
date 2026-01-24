import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import PortfolioList from './pages/Portfolio/PortfolioList'
import PortfolioDetails from './pages/Portfolio/PortfolioDetails'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/ErrorPages/NotFound'

import ScrollToTopButton from './components/General/Buttons/ScrollToTopButton'
import OpenOnTop from './utils/OpenOnTop'
import CustomSelection from './utils/CustomSelection'

import ThemeProvider from './components/General/SwithModeBtn/ThemeProvider'

import PageWrapper from './components/General/PageWrapper'

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
                        <Route
                            path="/portfolio"
                            element={
                                <PageWrapper>
                                    <PortfolioList />
                                </PageWrapper>
                            }
                        />
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
