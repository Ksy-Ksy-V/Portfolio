import HeroSection from '../../components/heroSection/HeroSection';
import AboutMe from '../../components/heroSection/AboutMe';
import RunningLine from '../../components/heroSection/RunningLine';

const Home = () => {
  return (
    <div className='about-me-page'>
      <HeroSection />
      <RunningLine />
      <AboutMe />
    </div>
  );
};

export default Home;
