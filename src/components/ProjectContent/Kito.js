import React, { useState } from 'react'
import { Tabs, Tab, Box, Grid } from '@mui/material'
import StyledImage from '../../components/StyledImage'
import { kito } from '../../img/imagesData'

const Kito = () => {
    const [activeTab, setActiveTab] = useState(1)

    const handleChange = (event, newValue) => {
        setActiveTab(newValue + 1)
    }

    return (
        <Grid item xs={8}>
            <Tabs
                value={activeTab - 1}
                onChange={handleChange}
                centered
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Desktop" />
                <Tab label="Tablet" />
                <Tab label="Mobile" />
            </Tabs>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={{ marginTop: '2rem' }}
            >
                <StyledImage
                    src={kito[activeTab]}
                    alt={`Tab ${activeTab}`}
                    sx={{
                        width: '95%',
                    }}
                />
            </Box>
        </Grid>
    )
}

export default Kito
