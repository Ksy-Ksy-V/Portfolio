import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SmallMenu from './SmallMenu'

const Header = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            className="header"
            sx={{
                border: 3,
                mt: '1rem',
                borderColor: 'primary.dark',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        className="logo"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.dark',
                            marginLeft: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    >
                        KSY
                    </Typography>
                </Grid>
                {isMobile ? (
                    <Grid
                        item
                        xs={10}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <SmallMenu />
                    </Grid>
                ) : (
                    <Grid item xs={10}>
                        <Navbar />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Header
