import React, { useEffect, useState } from 'react'
import { Typography, Stack, Card, CardContent, Box, Container, Rating } from '@mui/material'
import { Masonry } from "@mui/lab";
import feedback_icon from '../assets/feedback_icon.png'
import SEOComponent from '../components/SEOComponent.js'
import FreeTrialButton from '../components/FreeTrialButton.js'

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
            
            <SEOComponent
                    seoData={{
                    seo_slug: "testimonials",
                    seo_title: "Testimonials | Mini Developer",
                    seo_description: "Check out what our customers have to say about Mini Developer coding classes. Read genuine testimonials and reviews from our satisfied clients.",
                    meta_description: "Check out what our customers have to say about Mini Developer coding classes. Read genuine testimonials and reviews from our satisfied clients.",
                    meta_keywords: "Mini Developer testimonials, customer reviews, coding class feedback, student testimonials, programming course reviews"
            }} />            
            <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold', padding: '3vmin auto', fontFamily: 'Papyrus' }}>  Mini Developer<br />Customers' Reviews and Testimonials  </Typography>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    {testimonials.map((testimonial, index) => (
                        <ReviewCard key={index} testimonial={testimonial} />
                    ))}
                </Masonry>
            </Container>
            <Stack display="flex" alignItems="center" alignContent="center" spacing={1} >
                <FreeTrialButton course={null} />
            </Stack>
        </Box>
    );
}