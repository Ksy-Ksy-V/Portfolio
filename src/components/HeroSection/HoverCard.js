import {
    Typography,
    Card,
    CardContent,
    useTheme,
    CardMedia,
    Box,
} from '@mui/material'
import { useState } from 'react'

const HoverCard = ({ title, description, lightImg, darkImg }) => {
    const [hovered, setHovered] = useState(false)
    const theme = useTheme()
    const backgroundImage = theme.palette.mode === 'dark' ? darkImg : lightImg

    return (
        <Card
            sx={{
                position: 'relative',
                height: '15rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.1)' },
                overflow: 'hidden',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <CardMedia
                component="img"
                height="100%"
                image={backgroundImage}
                alt={title}
                sx={{
                    objectFit: 'cover',
                    border: '3px solid',
                    borderColor: 'primary.main',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor:
                        theme.palette.mode === 'dark'
                            ? 'rgba(64, 43, 58, 0.6)'
                            : 'rgba(253, 226, 228, 0.85)',

                    transition: 'background-color 0.3s ease-in-out',
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: hovered ? '-30%' : '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'top 0.3s ease-in-out',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    zIndex: 2,
                }}
            >
                {title}
            </Typography>

            <CardContent
                sx={{
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    position: 'absolute',
                    alignContent: 'center',
                    fontSize: '1rem',
                    color: 'primary.main',
                    zIndex: 2,
                }}
            >
                {description}
            </CardContent>
        </Card>
    )
}

export default HoverCard
