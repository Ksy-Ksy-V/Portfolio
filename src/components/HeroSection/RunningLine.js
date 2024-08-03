import Marquee from 'react-fast-marquee'
import { Box, Typography } from '@mui/material'

const RunningLine = ({ text }) => {
    return (
        <Box className="tech-stack">
            <Marquee pauseOnHover={true} autoFill>
                <Typography variant="h6" color={'primary.light'}>
                    {text}
                </Typography>
            </Marquee>
        </Box>
    )
}

export default RunningLine
