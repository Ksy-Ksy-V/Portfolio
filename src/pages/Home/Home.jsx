
import HeroSection from '../../components/Sections/Hero/HeroSection'
import RunningLine from '../../components/Sections/HomePage/TechStack/RunningLine'
import Projects from '../../components/Sections/HomePage/Projects/Projects'
import Workflow from '../../components/Sections/HomePage/Workflow/Workflow'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine />
            <Workflow />
            <Projects />
        </div>
    )
}

export default Home
