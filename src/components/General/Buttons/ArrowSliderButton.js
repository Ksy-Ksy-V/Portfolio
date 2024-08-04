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
        left: direction === 'left' && '10px',
        right: direction === 'right' && '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
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
