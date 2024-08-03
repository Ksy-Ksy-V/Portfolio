import { Grid, Typography } from '@mui/material'
import Slider from '../../components/Slider/Slider'

import HeroSection from '../../components/HeroSection/HeroSection'
import AboutMe from '../../components/HeroSection/AboutMe'
import RunningLine from '../../components/HeroSection/RunningLine'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine />
            <AboutMe />

            <Grid container spacing={2} columns={12}>
                <Grid item xs={8}>
                    <Slider />
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        It is a web application that allows users to create
                        their own online library. It provides the ability to add
                        books to virtual shelves or a separate library for
                        physical copies of books, catalog them, and keep a
                        reading diary.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
