import { Grid, Typography } from '@mui/material'

import HeroSection from '../../components/HeroSection/HeroSection'
import RunningLine from '../../components/HeroSection/RunningLine'
import TimeLine from '../../components/HeroSection/TimeLine'
import Principles from '../../components/HeroSection/Principles'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine
                text={`< MY STACK:  TS | JS | REACT >\u00A0\u00A0\u00A0\u00A0`}
            />

            <Principles />

            <Grid
                container
                spacing={2}
                columns={12}
                display="flex"
                justifyContent="center"
                textAlign="center"
            >
                <TimeLine />
            </Grid>
        </div>
    )
}

export default Home
