import { Typography, Grid, Button } from '@mui/material'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import fetchProjects from '../../utils/fetchProjects'
import Loading from './../../components/General/Loading'
import ErrorMessage from './../../components/General/ErrorMessage'

const SliderPortfolio = ({ nextPicture, prevPicture, title }) => {
    const { loading, error } = fetchProjects()

    if (loading) return <Loading />
    if (error) return <ErrorMessage />

    return (
        <Grid
            item
            xs={12}
            sx={{
                position: 'relative',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}
        >
            <Button
                variant="outlined"
                size="large"
                disableRipple
                onClick={prevPicture}
                sx={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    color: 'primary.main',
                    '& .MuiButton-startIcon': {
                        color: 'primary.main',
                    },
                }}
            >
                <KeyboardArrowLeft sx={{ fontSize: '4rem' }} />
                <Typography
                    variant="body1"
                    color="primary.light"
                    textAlign="center"
                >
                    Prev
                    <br />
                    project
                </Typography>
            </Button>

            <Button
                variant="outlined"
                size="large"
                disableRipple
                onClick={nextPicture}
                sx={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    color: 'primary.main',
                    '& .MuiButton-endIcon': {
                        color: 'primary.main',
                    },
                }}
            >
                <Typography
                    variant="body1"
                    color="primary.light"
                    textAlign="center"
                >
                    Next
                    <br />
                    project
                </Typography>
                <KeyboardArrowRight sx={{ fontSize: '4rem' }} />
            </Button>

            <Typography
                variant="h4"
                textAlign="center"
                justifyContent="center"
                gutterBottom
                sx={{
                    color: 'primary.main',
                    '&:hover': {
                        textDecoration: 'underline wavy',
                    },
                }}
            >
                {title}
            </Typography>
        </Grid>
    )
}

export default SliderPortfolio
