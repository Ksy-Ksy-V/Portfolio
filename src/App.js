import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import AboutMePage from './pages/about-me/AboutMePage';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioDetails from './pages/portfolio/PortfolioDetails';
import NotFound from './components/NotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

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
