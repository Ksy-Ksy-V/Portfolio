import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMe from "../../components/HeroSection/AboutMe"
import RunningLine from "../../components/HeroSection/RunningLine"


const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine />
            <AboutMe />

        </div>
    );
}
 
export default Home;