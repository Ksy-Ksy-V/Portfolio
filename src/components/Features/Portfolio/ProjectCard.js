import { Grid, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import StyledImage from '../../Common/StyledImage'
import React from 'react'

const ProjectCard = ({ title, imgSrc, id }) => {
    return (
        <Grid item xs={12} sm={4}>
            <Typography
                component={Link}
                to={`/portfolio-details/${id}`}
                display="flex"
                justifyContent="center"
                variant="h6"
                sx={{
                    marginBottom: '2rem',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline wavy',
                    },
                }}
            >
                {`< ${title} >`}
            </Typography>

            <Box
                component={Link}
                to={`/portfolio-details/${id}`}
                sx={{
                    display: 'block',
                    marginBottom: '2rem',
                }}
            >
                <StyledImage
                    src={imgSrc}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Button
                component={Link}
                to={`/portfolio-details/${id}`}
                fullWidth
                sx={{
                    border: '3px solid',
                    marginBottom: '2rem',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                {`< See more >`}
            </Button>
        </Grid>
    )
}

export default ProjectCard
