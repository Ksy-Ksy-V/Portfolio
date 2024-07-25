import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/general/header/Header';
import AboutMePage from './pages/about-me/AboutMePage';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioDetails from './pages/portfolioDetails/PortfolioDetails';
import NotFound from './pages/errorPages/NotFound';
import Footer from './components/general/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <div className="content">

          <Routes>
            <Route path="/" element={<AboutMePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfoliodetails/:id" element={<PortfolioDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
