import React from 'react'
import { Grid } from '@mui/material'
import StyledImage from '../../components/StyledImage'

import fullCine01 from '../../img/fullCine01.png'
import fullCine02 from '../../img/fullCine02.jpg'

const CinePeek = ({ title }) => {
    return (
        <>
            <Grid
                item
                xs={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <StyledImage
                    src={fullCine01}
                    alt={title}
                    sx={{
                        margin: '1rem',
                        width: '95%',
                    }}
                />
            </Grid>
            <Grid
                item
                xs={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <StyledImage
                    src={fullCine02}
                    alt={title}
                    sx={{
                        margin: '1rem',
                        width: '95%',
                    }}
                />
            </Grid>
        </>
    )
}

export default CinePeek
