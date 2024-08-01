import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import Home from './pages/home/homePage';
import PortfolioList from './pages/portfolio/portfolioList';
import PortfolioDetails from './pages/portfolio/portfolioDetails';
import Contact from './pages/contact/Contact';
import NotFound from './pages/errorPages/NotFound';

import Header from './components/general/header/HeaderComp';
import Footer from './components/general/footer/Footer'; 

function App() {
  return (
    <Router>
      <Container 
        maxWidth='md' 
        sx={{ 
          marginTop: '2rem', 
          marginBottom: '2rem' 
        }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<PortfolioList />} />
            <Route path='/portfoliodetails/:id' element={<PortfolioDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}
export default App;
