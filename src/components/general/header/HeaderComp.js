import { Box,Grid } from '@mui/material';
import Logo from './Logo';
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
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={10}>
            <Navbar />
          </Grid>
        </Grid>
      </Box>
    );
  };
 
export default Header;