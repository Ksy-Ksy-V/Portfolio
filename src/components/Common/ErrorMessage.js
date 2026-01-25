import React from 'react'
import RunningLine from '../Sections/TechStack/RunningLine'

import { Grid, Typography, Button } from '@mui/material'

const ErrorMessage = () => {
    const handleReload = () => {
        window.location.reload()
    }
    return (
        <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: '2rem', minHeight: '70vh' }}
        >
            <Grid item xs={12} mb={2} sx={{}}>
                <RunningLine />
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    display="flex"
                    justifyContent="center"
                    color={'primary.dark'}
                >
                    {`< But ... Something went wrong...>`}
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Button
                    onClick={handleReload}
                    fullWidth
                    sx={{
                        color: 'primary.dark',
                        border: '3px solid',
                        marginBottom: '2rem',
                        marginTop: '1rem',
                        '&:hover': {
                            border: '3px solid',
                            color: 'primary.main',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {`Try again`}
                </Button>
            </Grid>
            <Grid item xs={12} mb={2} sx={{}}>
                <RunningLine />
            </Grid>
        </Grid>
    )
}

export default ErrorMessage
