import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Box, Grid } from '@mui/material'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const ImageTabs = ({ project }) => {
    const [activeTab, setActiveTab] = useState('desc')
    const isMobile = useMediaQuery('(max-width: 767px)')

    useEffect(() => {
        setActiveTab('desc')
    }, [project])

    const handleChange = (_event, newValue) => {
        const tabKeys = ['desc', 'tab', 'mob']
        setActiveTab(tabKeys[newValue])
    }

    return (
        <Grid
            item
            xs={isMobile ? 12 : 8}
            sx={{ mt: isMobile ? '2rem' : '0rem' }}
        >
            <Tabs
                value={['desc', 'tab', 'mob'].indexOf(activeTab)}
                onChange={handleChange}
                centered
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
                alignContent="center"
                justifyContent="flex-end"
                alignItems={activeTab === 'mob' ? 'flex-start' : 'flex-end'}
                sx={{ mt: isMobile ? '0rem' : '2rem' }}
            >
                {project.imagesData[activeTab]?.map((image, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`${activeTab} Image ${index + 1}`}
                        sx={{
                            width: activeTab === 'mob' ? '40%' : '85%',
                            height: 'auto',
                            margin: '1rem',
                            border: '3px solid',
                            borderColor: 'var(--color-primary-dark)',
                            transition: 'border-color 0.3s ease',
                            '&:hover': {
                                borderColor: 'var(--color-primary-main)',
                            },
                        }}
                    />
                ))}
            </Box>
        </Grid>
    )
}

export default ImageTabs
