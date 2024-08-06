import { useState } from 'react'
import { Typography, Box, Grid, TextField, Button } from '@mui/material'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, email, message })
        setSubmitted(true)
    }

    return (
        <Grid item xs={12}>
            {!submitted ? (
                <Box
                    sx={{
                        border: '3px solid',
                        borderColor: 'primary.dark',
                        '&:hover': {
                            borderColor: 'primary.main',
                        },
                    }}
                >
                    <Typography
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                        variant="h6"
                        color={'primary.main'}
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline wavy',
                            },
                            marginBottom: '2rem',
                            marginTop: '2rem',
                        }}
                    >
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
                                        borderColor: 'primary.light',
                                        '&:hover': {
                                            border: '3px solid',
                                            borderColor: 'primary.main',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            ) : (
                <Box
                    sx={{
                        border: '3px solid',
                        borderColor: 'primary.dark',
                        '&:hover': {
                            borderColor: 'primary.main',
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                        variant="h6"
                        sx={{
                            marginTop: '2rem',
                        }}
                    >
                        Thank you for your message!
                    </Typography>
                    <Typography
                        display={'center'}
                        textAlign={'center'}
                        justifyContent="center"
                        variant="body"
                        sx={{
                            marginBottom: '1rem',
                            marginTop: '2rem',
                        }}
                    >
                        I will get back to you as soon as possible.
                    </Typography>

                    <FavoriteBorderIcon
                        sx={{
                            display: 'center',
                            textAlign: 'center',
                            color: 'primary.dark',
                            fontSize: '3rem',
                            marginBottom: '2rem',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </Box>
            )}
        </Grid>
    )
}

export default ContactForm
