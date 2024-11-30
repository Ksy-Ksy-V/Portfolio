import { Grid } from '@mui/material'

import HeroSection from '../../components/HeroSection/HeroSection'
import RunningLine from '../../components/HeroSection/RunningLine'
import TimeLine from '../../components/HeroSection/TimeLine'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine
                text={`< MY STACK:  TS | JS | REACT >\u00A0\u00A0\u00A0\u00A0`}
            />

            <Grid container spacing={2} columns={12}>
                <TimeLine />
            </Grid>
        </div>
    )
}

export default Home
