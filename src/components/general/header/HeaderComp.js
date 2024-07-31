import { Link } from "react-router-dom";
import { Box, Typography, Grid } from '@mui/material';

import Navbar from './Navbar';

const Header = () => {
    return ( 
        <Box
        className="header"
        sx={{
          border: 3,
          mt: '1rem',
          borderColor: 'primary.dark',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <Typography 
              variant='h4' 
              component={Link} to="/" 
              className="logo" 
              sx={{ 
                textDecoration: 'none',
                color: 'primary.dark'
              }}
            >
              KSY
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Navbar />
          </Grid>
        </Grid>
      </Box>
    );
  };
 
export default Header;