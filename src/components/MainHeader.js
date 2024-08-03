import { Typography } from '@mui/material'

const MainHeader = ({ textOne, highlightText, textTwo, sx = {} }) => {
    return (
        <Typography variant="h4" color={'primary.dark'} sx={sx}>
            {`< ${textOne} `}
            <Typography
                component="span"
                variant="h4"
                sx={{
                    color: 'primary.main',
                    '&:hover': {
                        textDecoration: 'underline wavy',
                    },
                }}
            >
                {highlightText}
            </Typography>
            {` ${textTwo} >`}
        </Typography>
    )
}

export default MainHeader
