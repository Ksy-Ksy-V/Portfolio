import React from 'react'
import { Grid, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import SocialLinks from '../General/Footer/SocialLinks'

const ContactInformation = () => {
    return (
        <Grid>
            <Typography
                variant="h6"
                color={'primary.light'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '&:hover': {
                        textDecoration: 'underline wavy',
                    },
                }}
            >
                {`< Contact information >`}
            </Typography>

            <Grid container spacing={2} columns={12} sx={{ marginTop: 2 }}>
                <Grid
                    item
                    xs={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <EmailOutlinedIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    >
                        email@example.com
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <LocalPhoneOutlinedIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    >
                        +123 456 7890
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <LocationOnOutlinedIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: 2,
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    >
                        Sofia, Bulgaria
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '2rem' }}>
                <SocialLinks />
            </Grid>
        </Grid>
    )
}

export default ContactInformation
