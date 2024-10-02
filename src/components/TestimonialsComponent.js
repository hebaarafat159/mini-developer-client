import React, { useEffect, useState } from 'react'
import { Typography, Grid, Stack, Button } from '@mui/material'

// testimonialsCount will be 0 if we want to load all that we had
export default function CourseLevelsComponent({ testimonialsCount }) {

    const [testimonials, setTestimonials] = useState([
        {
            text: "My son is enjoying the lessons and I am glad he is progressing well",
            date: "2024-09-09T00:00:00.000+00:00"
        },
        {
            text: "My son is enjoying the lessons and I am glad he is progressing well",
            date: "2024-09-09T00:00:00.000+00:00"
        },
        {
            text: "My son is enjoying the lessons and I am glad he is progressing well",
            date: "2024-09-09T00:00:00.000+00:00"
        },
        {
            text: "My son is enjoying the lessons and I am glad he is progressing well",
            date: "2024-09-09T00:00:00.000+00:00"
        }
    ])


    // useEffect(() => {
    //     if (testimonialsCount > 0) {
    //         fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/testimonials`)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setTestimonials(result.body);
    //                 console.log(`Testimonials Object : ${result.body}`)
    //             })
    //     } else {
    //         fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/latesttestimonials`)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setTestimonials(result.body);
    //                 console.log(`Testimonials Object : ${result.body}`)
    //             })
    //     }
    // }, [testimonialsCount]);

    return (
        (testimonials && testimonials.length > 0) ?
            <Stack direction="column" sx={{ display: { xs: 'flex', flexFlow: 'row flex' }, my: 1 }} width={'100%'}>
                <Typography component="h4" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold', padding: '3vmin auto', fontFamily: 'Papyrus' }}> Do you know what our Customers say about us?  </Typography>
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }} style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    {testimonials.map((testimonial, index) => (
                        <Grid xs={2} sm={4} md={2} key={index} sx={{ justifyContent: 'center', alignItems: 'center', margin: '1vmin', fontWeight: 'bold', padding: '3vmin' }}>
                            <div style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundImage: 'url("https://img.freepik.com/free-vector/star-emoji-framed-background_53876-89768.jpg?ga=GA1.1.1315253702.1718914056&semt=ais_hybrid")'
                                backgroundImage: 'url("https://drive.google.com/thumbnail?id=1SodYYBLeDlkUK6pDRu5AkKxdrJglGGS2")'
                            }}>
                                <Typography component="p" variant='p' style={{ textAlign: 'center', padding: '2vw', fontFamily: 'Cursive' }}> {testimonial.text} </Typography>
                            </div>
                        </Grid>
                    ))}
                    {(testimonialsCount > 0) ?
                        <Grid xs={2} sm={4} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1vmin' }}>
                            <Button
                                variant="contained"
                                className={'blue_btn'}
                                LinkComponent={'a'} href={'/testimonials'}
                                onClick={() => window.scroll({
                                    top: (document.body.offsetTop + 550),
                                    left: 0,
                                    behavior: 'smooth',
                                })}> See More </Button>
                        </Grid> : null}
                </Grid>
            </Stack >
            : null
    )
}