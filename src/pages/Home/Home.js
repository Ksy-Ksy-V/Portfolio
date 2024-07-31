import HeroSection from "../../components/HeroSection/HeroSection";
import imgAboutMe from "./../../img/imgAboutMe.jpg" 

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />

            <div className="about-me">
                <h2>About me</h2>
                <div className="about-me-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img 
                        src={imgAboutMe}
                        alt="Title"
                        className="about-me__cover" 
                    />
                </div>
            </div>
 

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