import React from 'react'
import { Button, Stack, Typography, Grid } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton.js'
import ExploreButtonComponent from '../components/ExploreButtonComponent.js'
import news_img from '../assets/news_img.png'
import benefit from '../assets/ benefit.gif'
import creative_img from '../assets/creative_img.png'
import logical_thinking_img from '../assets/logical_thinking_img.png'
import collaboration_img from '../assets/collaboration_img.png'
import digital_literacy_img from '../assets/digital_literacy_img.png'
import SEOComponent from '../components/SEOComponent.js'
import '../App.css'

export default function Home() {

    const teachingTopics = [
        {
            icon: creative_img,
            title: "Creativity",
            description: "Generating ideas, alternatives, or possibilities to solve problems."
        },
        {
            icon: logical_thinking_img,
            title: "Logical Thinking",
            description: "Developing problem-solving and critical-thinking skills."
        },
        {
            icon: collaboration_img,
            title: "Collaboration",
            description: "Enhancing communication and collaboration skills."
        },
        {
            icon: digital_literacy_img,
            title: "Digital Literacy",
            description: "Providing an understanding of technology and how it shapes our world."
        }
    ]
    return (
        <div>
            <SEOComponent
                seoData={{
                    seo_slug: "/",
                    seo_title: "Mini Developer, Coding classes for children in London, UK or Online",
                    seo_description: "Welcome to Mini Developer Coding School. We offer coding and programming classes for children aged 7 and up in London, UK or Online. Give your child the gift of coding and help them develop valuable skills for the future. Contact us today to learn more!"
                }} />

            <Stack >
                {/* news Bar  */}
                <Stack direction="row" className='ads-box'>
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid item sm={4} md={2}>
                            <Typography component="h3" variant='h5' style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '2vmin' }}> Exciting News!! </Typography>
                        </Grid>
                        <Grid item sm={4} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1vmin' }} >
                            <Typography component="p" variant='p' style={{ color: 'white', fontStyle: 'italic', textAlign: 'left' }}> Booking Open for Autumn 2024 Term – Join  Our <span style={{ fontWeight: 'bolder' }}>In-Person and Online </span>Classes! </Typography>
                        </Grid>
                        <Grid item sm={4} md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1vmin' }} >
                            <Button
                                variant="contained"
                                className={'blue_btn'}
                                onClick={() => window.scroll({
                                    top: (document.body.offsetTop + 600),
                                    left: 0,
                                    behavior: 'smooth',
                                })}> Read More</Button>
                        </Grid>

                    </Grid>
                </Stack>

                {/* Coding Vedio */}
                <Stack direction="row">
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className={'page_content'}>
                        <Grid item xs={4} sm={12} md={4} className={'coding-vedio-section'} sx={{ justifyContent: 'center', alignItems: 'center', padding: '1vmin' }}>
                            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> Build your Child's Valuable Coding & Problem-Solving Skills</Typography>
                                <Stack direction="row" spacing={1} >
                                    <FreeTrialButton course={null} />
                                    <ExploreButtonComponent />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={12} md={6} className={'home-page-block'}>
                            <video playsInline autoPlay muted loop poster="/coding_intro_thumb.png" >
                                <source src="/coding_intro_movie.mp4" type="video/mp4" />
                                Your browser does not support the video tag
                            </video>
                        </Grid>
                    </Grid>
                </Stack>

                {/* News Events */}
                <Stack direction="row" >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className={'page_content_dark'}>
                        <Grid item sm={12} md={6}>
                            <img src={news_img} loading="lazy" alt="" width={'100%'} />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} width={'100%'} >
                                <Typography component="h3" variant='h4' style={{ color: '#fed677', textAlign: 'center', fontWeight: 'bold' }}> News & Events </Typography>
                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Vacancies Available in our Online Classes </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Coding is Fun.</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center', padding: 'auto 2vmin' }}>We're glad to announce that Booking is now Open for the Autumn term which begins in September 2024 in our in-person and also our Online classes.</Typography>

                                <Stack direction="row" spacing={1} >
                                    <FreeTrialButton course={null} />
                                </Stack>

                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Coding in Ealing Council Libraries! </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Mini Developer partners with Ealing Council Libraries starting from September term 2023.</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Proud to work together to spread the knowledge, benefit the community and prepare children for the digital future. </Typography>

                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                {/* Testimonial */}
                <Stack direction="column" >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className={'page_content'}>
                        <Grid item xs={8} sx={{ flexGrow: 1 }}>
                            <Typography component="h4" variant='h4' style={{ color: '#4682b4', fontWeight: 'bold', padding: '1vmin auto' }}> Do you know what our Customers say about us?  </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                className={'blue_btn'}
                                LinkComponent={'a'} href={'/testimonials'}
                            > See More </Button>
                        </Grid>
                    </Grid>
                    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container columns={{ xs: 2, sm: 8, md: 12 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Grid item sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <video playsInline autoPlay muted loop poster="/testimonial_thumb.png" width={'80%'}>
                                    <source src="/testimonial.mp4" type="video/mp4" />
                                    Your browser does not support the video tag
                                </video>
                            </Grid>                    
                        </Grid>
                    </Stack>
                </Stack>

                {/* The Benefit  */}
                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', margin: '5vmin 2vmin' }} >
                    <Typography component="h4" variant='h4' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'start' }}> The Benefit of the Early Learning of Coding </Typography>
                    <Typography component="h5" variant='h5' style={{ color: '#333440', textAlign: 'left' }}> Apart from improving writing & mathematics skills, Learning Coding boosts STEM. </Typography>
                    <Typography component="h5" variant='h5' style={{ color: '#333440' }}> Gives children 5 steps of progress skills in life and eventually in the workforce. </Typography>

                    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <img src={benefit} loading="lazy" alt="" width={'100%'} />
                        <Typography component="p" variant='p' style={{ color: '#333440', fontStyle: 'italic', textAlign: 'center' }}>Join us on this journey & give your children the opportunity to boost their skills. </Typography>
                    </Stack>
                </Stack>

                {/* Our Teaching Section */}
                <Stack direction="column" spacing={2} className="page_content_dark" sx={{ p: 2 }}>
                    <Typography
                        component="h3"
                        variant="h4"
                        sx={{ color: '#fed677', fontWeight: 'bold', textAlign: 'left' }}
                    >
                        Our Teaching program combines Knowledge with Fun
                    </Typography>
                    <Typography component="p" variant="body1" sx={{ color: 'white' }}>
                        Our coding program assists children to build valuable skills in life and eventually in
                        the workforce.
                    </Typography>
                    <Grid container columns={{ xs: 2, sm: 8, md: 16 }} spacing={2}>
                        {teachingTopics.map((topic, index) => (
                            <Grid
                                item
                                xs={2}
                                sm={4}
                                md={4}
                                key={index}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: '1vmin auto' }}
                            >
                                <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        src={topic.icon}
                                        loading="lazy"
                                        alt={topic.title}
                                        width="50%"
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                    <Typography component="h5" variant="h5" sx={{ color: '#ed5977', textAlign: 'center' }}>
                                        {topic.title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        sx={{ color: 'white', textAlign: 'center', p: '2vw' }}
                                    >
                                        {topic.description}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Stack >
        </div>

    )
}