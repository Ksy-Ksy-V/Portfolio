import HeroSection from '../../components/Sections/Hero/HeroSection'
import RunningLine from '../../components/Sections/TechStack/RunningLine'
import Projects from '../../components/Sections/Projects/Projects'
import Workflow from '../../components/Sections/Workflow/Workflow'

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
