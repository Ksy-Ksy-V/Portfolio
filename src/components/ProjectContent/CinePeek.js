import React from 'react'
import { Grid } from '@mui/material'
import StyledImage from '../../components/StyledImage'

const CinePeek = ({ imgSrcOne, imgSrcTwo, title }) => {
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
                    src={imgSrcOne}
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
                    src={imgSrcTwo}
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
