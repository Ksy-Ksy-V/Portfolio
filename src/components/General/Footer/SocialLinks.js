import React from 'react'
import { Grid, useTheme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FigmaIcon from '../../../img/icons/FigmaIcon'

const SocialLinks = () => {
    const theme = useTheme()
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
                    href="https://www.figma.com/files/project/45598373"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FigmaIcon
                        iconStyle={{
                            fill: theme.palette.background.default,
                        }}
                        sx={{
                            color: theme.palette.primary.dark,
                            htmlColor: theme.palette.background.default,
                            fontSize: '2.75rem',
                            '&:hover circle': {
                                fill: theme.palette.primary.main,
                            },
                            '&:hover path': {
                                fill: theme.palette.background.default,
                            },
                        }}
                    />
                </a>
            </Grid>

            <Grid item>
                <a
                    href="www.linkedin.com/in/kseniia-voitikh"
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

            <Grid item>
                <a
                    href="https://github.com/Ksy-Ksy-V"
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
        </Grid>
    )
}

export default SocialLinks
