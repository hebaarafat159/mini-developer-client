import React, { useEffect, useState } from 'react'
import { Typography, Card, CardContent, Box, Container, Rating } from '@mui/material'
import { Masonry } from "@mui/lab";
import feedback_icon from '../assets/feedback_icon.png'

export default function Testimonial({ testimonialsCount }) {

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


    const ReviewCard = ({ testimonial }) => {
        return (
            <Card sx={{ backgroundColor: "white", color: "black", p: 2, borderRadius: 3 }}>
                <Box display="flex" alignItems="center" gap={2}>
                    <img src={feedback_icon} loading="lazy" alt="" width={'10%'} />
                    <Box >
                        <Typography variant="h6" fontWeight="bold">
                            {testimonial.person}
                        </Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Typography variant="body1"> "{testimonial.text}"</Typography>
                    <Box mt={2} display="flex" gap={0.5}>
                        <Rating value={testimonial.rate} precision={0.5} readOnly sx={{ mt: 1, color: "#f06848" }} />
                    </Box>
                </CardContent>
            </Card>
        );
    };

    return (
        <Box py={6} sx={{ backgroundColor: "#f9f9f9" }}>
            <Typography component="h4" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold', padding: '3vmin auto', fontFamily: 'Papyrus' }}> Do you know what our Customers say about us?  </Typography>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    {testimonials.map((testimonial, index) => (
                        <ReviewCard key={index} testimonial={testimonial} />
                    ))}
                </Masonry>
            </Container>
        </Box>
    );
}