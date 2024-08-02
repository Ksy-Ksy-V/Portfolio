import { useState } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log({ name, email, message });
      };

    return (
        <Box 
            sx={{
                border: '3px solid',
                borderColor: 'primary.dark'
            }}>

            <Typography 
                display={'center'}
                textAlign={'center'}
                justifyContent='center'
                    variant='h6' 
                    color={'primary.main'} 
                    sx={{
                        '&:hover': {
                            textDecoration: 'underline wavy'
                        },
                        marginBottom: '2rem',
                        marginTop: '1rem',
                }}>
                {`< Any questions? >`}
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: '3px solid',
                                    borderRadius: '0px',
                                    borderColor: 'primary.dark',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'primary.main',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.dark',
                                },
                                },
                            }}
                            />
                    </Grid>
                    <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                border: '3px solid',
                                borderRadius: '0px',
                                borderColor: 'primary.dark',
                                },
                                '&:hover fieldset': {
                                borderColor: 'primary.main',
                                },
                                '&.Mui-focused fieldset': {
                                borderColor: 'primary.dark',
                                },
                            },
                            }}
                        />
                    </Grid>
                    <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        sx={{
                            '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '3px solid',
                                borderRadius: '0px',
                                borderColor: 'primary.dark',
                            },
                            '&:hover fieldset': {
                                borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'primary.dark',
                            },
                            },
                        }}
                        />
                    </Grid>
                    <Grid item xs={11}>

                        <Button
                            fullWidth
                            endIcon={<SendOutlinedIcon />}
                            type="submit"
                            sx={{ 
                                margin: '1rem',
                                border: '3px solid',
                                borderColor: 'primary.main',
                                '&:hover': {
                                    border: '3px solid',
                                    borderColor: 'primary.main',
                                    backgroundColor: 'transparent'
                                    },
                                }}
                            >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
    </Box>
    );
}
 
export default ContactForm;