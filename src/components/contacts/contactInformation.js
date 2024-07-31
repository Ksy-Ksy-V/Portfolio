import { Grid, Box, Typography, Button } from '@mui/material';

const ContactInformation = () => {
    return (
        <Typography variant='h6' color={'primary.main'} sx={{
            '&:hover': {
                textDecoration: 'underline wavy'
            }
        }}>
            {`< Contact information >`}
        </Typography>
    );
}
 
export default ContactInformation;