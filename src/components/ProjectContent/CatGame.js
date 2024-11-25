import React from 'react'
import { Grid } from '@mui/material'
import { animations } from '../../animation/animationData'

const CatGame = ({ title }) => {
    return (
        <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            {Object.values(animations).map((animation, index) => (
                <Grid
                    key={index}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginLeft: '2rem',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    <img
                        src={animation}
                        alt={`Animation ${index + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: '3px solid',
                            borderColor: 'primary.dark',
                            '&:hover': {
                                borderColor: 'primary.main',
                            },
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CatGame
