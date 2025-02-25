import React from 'react'
import { Grid, Typography } from '@mui/material'
import HoverCard from '../../components/HeroSection/HoverCard'
import principles from '../HeroSection/HoverCardData'

const Principles = () => {
    return (
        <>
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
        </>
    )
}

export default Principles
