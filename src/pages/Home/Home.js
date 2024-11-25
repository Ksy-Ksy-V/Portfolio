import { Grid } from '@mui/material'
import SliderHomePage from '../../components/Slider/SliderHomePage'

import HeroSection from '../../components/HeroSection/HeroSection'
import RunningLine from '../../components/HeroSection/RunningLine'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine
                text={`< MY STACK:  TS | JS | REACT >\u00A0\u00A0\u00A0\u00A0`}
            />

            <Grid container spacing={2} columns={12} display={'block'}>
                <SliderHomePage />
            </Grid>
        </div>
    )
}

export default Home
