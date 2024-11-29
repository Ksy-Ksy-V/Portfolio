import React, { useState } from 'react'
import { Tabs, Tab, Box, Grid } from '@mui/material'
import StyledImage from '../StyledImage'

const ImageTabs = ({ project }) => {
    const [activeTab, setActiveTab] = useState('desc')

    const handleChange = (_event, newValue) => {
        const tabKeys = ['desc', 'tab', 'mob']
        setActiveTab(tabKeys[newValue])
    }

    return (
        <Grid item xs={8}>
            <Tabs
                value={['desc', 'tab', 'mob'].indexOf(activeTab)}
                onChange={handleChange}
                centered
                indicatorColor="primary"
                textColor="primary"
                TabIndicatorProps={{
                    style: { display: 'none' },
                }}
            >
                {['Desktop', 'Tablet', 'Mobile'].map((label, index) => (
                    <Tab
                        key={index}
                        label={label}
                        disableRipple
                        sx={{
                            fontSize: '1.25rem',
                            textTransform: 'none',
                            '&.Mui-selected': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    />
                ))}
            </Tabs>

            <Box
                display="flex"
                flexDirection={activeTab === 'mob' ? 'row' : 'column'}
                alignContent="flex-start"
                justifyContent="flex-end"
                alignItems={activeTab === 'mob' ? 'flex-start' : 'flex-end'}
                sx={{ marginTop: '2rem' }}
            >
                {project.imagesData[activeTab]?.map((image, index) => (
                    <StyledImage
                        key={index}
                        src={image}
                        alt={`${activeTab} Image ${index + 1}`}
                        sx={{
                            width: activeTab === 'mob' ? '40%' : '85%',
                            height: 'auto',
                            margin: '1rem',
                        }}
                    >
                        {console.log(image, 'image')}
                    </StyledImage>
                ))}
            </Box>
        </Grid>
    )
}

export default ImageTabs
