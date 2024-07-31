import { Typography, Box } from '@mui/material';

const ContactForm = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.dark',}}> 
            <Typography 
                variant='h6' 
                color={'primary.light'} 
                sx={{
                    '&:hover': {
                        textDecoration: 'underline wavy'
                    }
            }}>
                {`< Any questions? >`}
            </Typography>
        </Box>
    );
}
 
export default ContactForm;