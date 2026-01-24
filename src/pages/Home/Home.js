import { Grid, Typography } from '@mui/material'

import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import RunningLine from '../../components/HeroSection/RunningLine'
import Projects from '../../components/HeroSection/Projects'
import Workflow from '../../components/HeroSection/Workflow'

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
