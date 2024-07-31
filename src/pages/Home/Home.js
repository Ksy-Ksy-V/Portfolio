import HeroSection from "../../components/HeroSection/HeroSection";
import AboutMe from "../../components/HeroSection/AboutMe"


const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />

            <AboutMe />
 

            <ul className="tech-stack">
                <h2>Tech Stack</h2>
                    <li className="tech-stack-items">HTML</li>
                    <li className="tech-stack-items">CSS</li>
                    <li className="tech-stack-items">JS</li>
                    <li className="tech-stack-items">REACT</li>
            </ul>

        </div>
    );
}
 
export default Home;