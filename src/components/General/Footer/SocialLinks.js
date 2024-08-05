import React from 'react'
import { Grid } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

const SocialLinks = () => {
    return (
        <Grid
            container
            display={'flex'}
            justifyContent={'center'}
            spacing={5}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Grid item>
                <a
                    href="https://www.facebook.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '3rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </a>
            </Grid>

            <Grid item>
                <a
                    href="https://github.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '3rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </a>
            </Grid>

            <Grid item>
                <a
                    href="https://www.linkedin.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon
                        sx={{
                            color: 'primary.dark',
                            fontSize: '3rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </a>
            </Grid>
        </Grid>
    )
}

export default SocialLinks
