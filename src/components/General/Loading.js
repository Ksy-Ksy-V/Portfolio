import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <CircularProgress color="primary" />
            <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
                Loading...
            </Typography>
        </Box>
    )
}

export default Loading
