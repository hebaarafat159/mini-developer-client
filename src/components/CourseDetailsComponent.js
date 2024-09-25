import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'

export default function CourseDetailsComponent({ details }) {
    return (
        <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ display: { xs: 'flex', justifyContent: 'center', alignItems: 'center', margin: '.2vmin' } }}>
            {details ? details.map((detail, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Stack direction="row" sx={{ display: { xs: 'flex', alignItems: 'center', margin: '.2vmin' } }}>
                        <img src={detail.icon} loading="lazy" alt="" width={'50vm'} />
                        <Typography component="h6" variant='h6' style={{ color: '#333440', padding: '1vw' }}> {detail.text} </Typography>
                    </Stack>
                </Grid>
            )) : null}
        </Grid>
    )
} 