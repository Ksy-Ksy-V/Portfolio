import Marquee from 'react-fast-marquee'
import { Box, Typography } from '@mui/material'

const RunningLine = ({ text, direction = 'left' }) => {
    return (
        <Box className="tech-stack">
            <Marquee pauseOnHover={true} autoFill direction={direction}>
                <Typography variant="h6" color={'primary.light'}>
                    {text}
                </Typography>
            </Marquee>
        </Box>
    )
}

export default RunningLine
