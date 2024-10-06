import React from 'react'
import { Typography, Grid } from '@mui/material'

export default function SingleTestimonialComponent({ testimonial, index }) {

    return (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <div style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                padding: '9vmin',
                margin: '2vmin',
                backgroundImage: 'url("https://drive.google.com/thumbnail?id=1SodYYBLeDlkUK6pDRu5AkKxdrJglGGS2")'
            }}>
                <Typography component="p" variant='p' style={{ fontWeight: 'bold', fontFamily: 'Cursive', fontSize: '100%', textAlign: 'center', padding: '12% 12% 12% 20%' }}> {testimonial.text} </Typography>
            </div>
        </Grid>
    )
}