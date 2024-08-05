import { Grid, Box, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import SocialLinks from '../General/Footer/SocialLinks'

const ContactInformation = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: 8,
            }}
        >
            <Typography
                variant="h6"
                color={'primary.light'}
                sx={{
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
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                        }}
                    >
                        Sofia, Bulgaria
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <SocialLinks />
            </Grid>
        </Box>
    )
}

export default ContactInformation
