
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const Logo = () => {
    return (
        <Typography 
            variant='h5' 
            component={Link} 
            to="/" 
            className="logo" 
            sx={{ 
                textDecoration: 'none',
                color: 'primary.dark',
                marginLeft: '2rem'
            }}
        >
            KSY
        </Typography>
    );
}

export default Logo;
