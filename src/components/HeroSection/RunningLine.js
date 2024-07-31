import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';

const RunningLine = () => {
    return (
        <Box 
            className="tech-stack" 
        >
            <Marquee 
                pauseOnHover={true} 
                autoFill
            >
                <Typography variant='h6' color={'primary.light'}>
                    {`< MY STACK:  HTML | CSS | JS | REACT >\u00A0\u00A0\u00A0\u00A0`}
                </Typography>
            </Marquee>
        </Box>
    );
}
 
export default RunningLine;