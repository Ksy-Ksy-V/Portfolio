import { Button } from '@mui/material'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'

const ArrowSliderButton = ({
    onClick,
    direction,
    size = 'large',
    variant = 'outlined',
    sx = {
        position: 'absolute',
        left: direction === 'left' && '0',
        right: direction === 'right' && '0',
        transform: 'translateY(200%)',
        zIndex: 2,
        color: 'primary.main',
        '& .MuiButton-startIcon': {
            color: 'primary.main',
        },
    },
}) => {
    return (
        <Button
            variant={variant}
            size={size}
            disableRipple
            onClick={onClick}
            sx={sx}
        >
            {direction === 'left' ? (
                <KeyboardArrowLeft sx={{ fontSize: '4rem' }} />
            ) : (
                <KeyboardArrowRight sx={{ fontSize: '4rem' }} />
            )}
        </Button>
    )
}

export default ArrowSliderButton
