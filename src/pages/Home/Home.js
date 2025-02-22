import { Grid, Typography } from '@mui/material'

import HeroSection from '../../components/HeroSection/HeroSection'
import RunningLine from '../../components/HeroSection/RunningLine'
import TimeLine from '../../components/HeroSection/TimeLine'
import HoverCard from '../../components/HeroSection/HoverCard'
import principles from '../../components/HeroSection/HoverCardData'

const Home = () => {
    return (
        <div className="about-me-page">
            <HeroSection />
            <RunningLine
                text={`< MY STACK:  TS | JS | REACT >\u00A0\u00A0\u00A0\u00A0`}
            />
            <Grid
                item
                xs={3}
                sm={12}
                display="flex"
                justifyContent="center"
                textAlign="center"
            >
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '3rem',
                        color: 'primary.main',
                    }}
                >
                    {`< My Principles >`}
                </Typography>
            </Grid>
            {/* <Grid container spacing={2} columns={12} sx={{ marginTop: '1rem' }}>
                <Grid item xs={3} sm={4}>
                    <Typography>
                        Striving to write well-structured and maintainable code,
                        following best practices to make it understandable,
                        scalable and easy to work with, is a core principle for
                        me.
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Typography>
                        I believe the visual experience plays a key role in user
                        interaction. I strive to create beautiful, harmonious
                        designs that enhance usability and engagement,
                        incorporating visual semiotics to convey meaning
                        intuitively.
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Typography>
                        I focus on creating products that are clear, accessible,
                        and easy to use. My goal is to ensure that every project
                        serves its purpose effectively, making interactions
                        seamless and intuitive for users.
                    </Typography>
                </Grid>
            </Grid> */}

            <Grid
                container
                spacing={2}
                columns={12}
                sx={{
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {principles.map((principle, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        key={index}
                        sx={{ padding: '1rem' }}
                    >
                        <HoverCard
                            title={principle.title}
                            description={principle.description}
                            lightImg={principle.lightImg}
                            darkImg={principle.darkImg}
                        />
                    </Grid>
                ))}
            </Grid>

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
