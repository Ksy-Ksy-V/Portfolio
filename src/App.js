
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import PortfolioList from './pages/Portfolio/PortfolioList';
import PortfolioDetails from './pages/Portfolio/PortfolioDetails';
import NotFound from './pages/ErrorPages/NotFound';

import Header from './components/general/Header/HeaderComp';
import Footer from './components/general/Footer/Footer';

function App() {
  return (
    <Router>
      <Container maxWidth="md" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<PortfolioList />} />
              <Route path="/portfoliodetails/:id" element={<PortfolioDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        <Footer />
      </Container>
    </Router>
  );
}
export default App;
