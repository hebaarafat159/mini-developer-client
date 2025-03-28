import React, { useEffect, useState } from 'react'
import { Typography, Grid, Card, CardContent, Box, Container, Rating } from '@mui/material'
import { Masonry } from "@mui/lab";
// import { Star } from "@mui/icons-material";

export default function Testimonial2({ testimonialsCount }) {

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
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {testimonial.person}
                        </Typography>
                        <Typography variant="body2" color="gray">
                            {testimonial.course_id.title}
                        </Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Typography variant="body1"> "{testimonial.text}"</Typography>
                    <Box mt={2} display="flex" gap={0.5}>
                        <Rating value={testimonial.rate} precision={0.5} readOnly sx={{ mt: 1, color: "#f06848" }} />
                        {/* {Array({{testimonial.rate}})
                            .fill()
                            .map((_, i) => (
                                <Star key={i} sx={{ color: "#f06848" }} />
                            ))} */}
                    </Box>
                </CardContent>
            </Card>
        );
    };
    const TestimonialCard = ({ testimonial }) => (
        <Card sx={{ maxWidth: 345, p: 3, borderRadius: 3, boxShadow: 4, backgroundColor: "white" }}>
            <CardContent>
                <Box display="flex" gap={0.5} mb={1}>
                    <Rating value={5} precision={0.5} readOnly sx={{ mt: 1, color: "#f06848" }} />
                </Box>
                <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
                    "{testimonial.text}"
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid item xs={8} sx={{ flexGrow: 1 }}>
                            <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', padding: '1vmin auto' }}> {testimonial.person} </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography component="h1" variant='h1' style={{ color: 'black', fontWeight: 'bold', padding: '1vmin auto' }}>,,</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );

    return (
        // <Container sx={{ mt: 5 }}>
        <Box py={6} sx={{ backgroundColor: "#f9f9f9" }}>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    {testimonials.map((testimonial, index) => (
                        <ReviewCard key={index} testimonial={testimonial} />
                    ))}
                </Masonry>
            </Container>
        </Box>
        // <Box py={6} sx={{ backgroundColor: "#f9f9f9" }}>
        //     <Container maxWidth="xl">
        //         <Typography variant="h4" sx={{ color: "#4682b4", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        //             Do you know what our Customers say about us?
        //         </Typography>

        //         <Grid container spacing={2} justifyContent="center">
        //             {testimonials.map((testimonial, index) => (
        //                 <Grid item key={index}>
        //                     <TestimonialCard testimonial={testimonial} />
        //                 </Grid>
        //             ))}
        //         </Grid>
        //     </Container>
        // </Box>
    );
}