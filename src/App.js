import './App.css';

import Navbar from './components/Navbar';
import AboutMePage from './pages/about-me/AboutMePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <AboutMePage />
      </div>
    </div>
  );
}

export default App;
