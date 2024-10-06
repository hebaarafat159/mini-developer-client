import React, { useEffect, useState } from 'react'
import { Typography, Grid, Stack, Button } from '@mui/material'
import SingleTestimonialComponent from './SingleTestimonialComponent';

// testimonialsCount will be 0 if we want to load all that we had
export default function TestimonialsComponent({ testimonialsCount }) {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        if (testimonialsCount > 0) {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/testmonials/latesttestimonials`)
                .then(response => response.json())
                .then(result => {
                    setTestimonials(result.body);
                    console.log(`Testimonials Object : ${result.body}`)
                })
        } else {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/testmonials`)
                .then(response => response.json())
                .then(result => {
                    setTestimonials(result.body);
                    console.log(`Testimonials Object : ${result.body}`)
                })
        }
    }, [testimonialsCount]);

    return (
        (testimonials && testimonials.length > 0) ?
            <Stack direction="column" sx={{ display: { xs: 'flex', flexFlow: 'row flex' }, my: 1 }} width={'100%'}>
                <Typography component="h4" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold', padding: '3vmin auto', fontFamily: 'Papyrus' }}> Do you know what our Customers say about us?  </Typography>
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                    {testimonials.map((testimonial, index) => (
                        <SingleTestimonialComponent testimonial={testimonial} index={index} />
                        // <Grid item xs={2} sm={4} md={4} key={index}>
                        //     <div style={{
                        //         backgroundRepeat: 'no-repeat',
                        //         backgroundSize: 'contain',
                        //         backgroundPosition: 'center',
                        //         padding: '9vmin',
                        //         margin: '2vmin',
                        //         backgroundImage: 'url("https://drive.google.com/thumbnail?id=1SodYYBLeDlkUK6pDRu5AkKxdrJglGGS2")'
                        //     }}>
                        //         <Typography component="p" variant='p' style={{ fontWeight: 'bold', fontFamily: 'Cursive', fontSize: '100%', textAlign: 'center', padding: '12% 12% 12% 20%' }}> {testimonial.text} </Typography>
                        //     </div>
                        // </Grid>
                    ))}
                    {(testimonialsCount > 0) ?
                        <Grid xs={2} sm={4} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1vmin' }}>
                            <Button
                                variant="contained"
                                className={'blue_btn'}
                                LinkComponent={'a'} href={'/testimonials'}
                            > See More </Button>
                        </Grid> : null}
                </Grid>
            </Stack >
            : null
    )
}