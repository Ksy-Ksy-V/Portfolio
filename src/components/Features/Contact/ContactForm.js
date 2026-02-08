import { useState } from 'react'
import { Typography, Box, Grid, TextField, Button } from '@mui/material'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const getApiUrl = () => {
    if (typeof window === 'undefined') return '/api/contact'
    return window.location.origin + '/api/contact'
}

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [honeypot, setHoneypot] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [errors, setErrors] = useState({})

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        setErrors({})
        setSubmitting(true)

        try {
            const res = await fetch(getApiUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message, hp: honeypot }),
            })
            const text = await res.text()
            const data = text ? (() => { try { return JSON.parse(text) } catch { return {} } })() : {}

            if (!res.ok) {
                if (data.fields && typeof data.fields === 'object') {
                    setErrors(data.fields)
                } else {
                    setErrors({ form: data.error || 'Something went wrong. Please try again.' })
                }
                setSubmitting(false)
                return
            }

            setSucceeded(true)
        } catch (err) {
            setErrors({ form: err.message || 'Network error. Please try again.' })
        } finally {
            setSubmitting(false)
        }
    }

    const fieldSx = {
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
    }

    return (
        <Grid item xs={12}>
            {!succeeded ? (
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

                    <form onSubmit={handleSubmitForm}>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={11}
                                sx={{
                                    position: 'absolute',
                                    left: '-9999px',
                                    width: '1px',
                                    height: '1px',
                                    overflow: 'hidden',
                                }}
                                aria-hidden="true"
                            >
                                <TextField
                                    fullWidth
                                    name="hp"
                                    label="Leave empty"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </Grid>
                            {errors.form && (
                                <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                                    <Typography variant="body2" color="error">
                                        {errors.form}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                    sx={fieldSx}
                                />
                            </Grid>
                            <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    sx={fieldSx}
                                />
                            </Grid>
                            <Grid item xs={11} sx={{ marginLeft: '1rem' }}>
                                <TextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    error={Boolean(errors.message)}
                                    helperText={errors.message}
                                    sx={fieldSx}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Button
                                    fullWidth
                                    endIcon={<SendOutlinedIcon />}
                                    type="submit"
                                    disabled={submitting}
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
                                    {submitting ? 'Sending...' : 'Submit'}
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
