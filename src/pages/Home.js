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
                    // seo_description: "Welcome to Mini Developer Coding School. We offer coding and programming classes for children aged 7 and above in London, UK or Online. Give your child the gift of coding and help them develop valuable skills for the future. Contact us today to learn more!"
                    seo_description: "Welcome to Mini Developer Coding School."
                }} />

            <Stack >
                {/* news Bar  */}
                <Stack direction="row" className='ads-box'>
                    <Grid container columns={{ xs: 2, sm: 8, md: 15 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid item sm={4} md={2}>
                            <Typography component="h5" variant='h5' style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '2vmin' }}> Exciting News!! </Typography>
                        </Grid>
                        <Grid item sm={4} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1vmin' }} >
                            <Typography component="h6" variant='h6' style={{ color: 'white', fontStyle: 'italic', textAlign: 'center' }}> Booking Open for Spring 2026 Term – Join  Our <span style={{ fontWeight: 'bolder' }}>In-Person and Online </span>Classes! </Typography>
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
                                <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> Fun and Interactive </Typography>
                                <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> Coding Classes</Typography>
                                <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> for Kids and Teens </Typography>
                                <Typography component="h3" variant='h6' style={{ color: '#333440', textAlign: 'center' }}> Empower your Child with Problem-Solving, Creativity and Logical Thinking through Coding </Typography>
                                <Stack direction="row" spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', padding: '1vmin' }}>
                                    <FreeTrialButton course={null} />
                                    <ExploreButtonComponent />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={12} md={6} className={'home-page-block'}>
                            <video playsInline autoPlay muted loop poster="/coding_intro_thumb.png" >
                                <source src="/coding_intro_movie.mp4" type="video/mp4" />
                                Your browser does not support this video.
                            </video>
                        </Grid>
                    </Grid>
                </Stack>

                {/* News Events */}
                <Stack direction="row" >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className={'page_content_dark'}>
                        <Grid item sm={12} md={6}  sx={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={news_img} loading="lazy" alt="" width={'80%'} />
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} width={'80%'} >
                                <Typography component="h3" variant='h4' style={{ color: '#fed677', textAlign: 'center', fontWeight: 'bold' }}> News & Events </Typography>
                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Vacancies Available in our Online and In-person Classes </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Coding is Fun.</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center', padding: 'auto 2vmin' }}>We're glad to announce that Booking is now Open for the Spring term which begins in January 2026 in our in-person and also our Online classes.</Typography>

                                <Stack direction="row" spacing={1} >
                                    <FreeTrialButton course={null} />
                                </Stack>

                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Coding Partnership with Palm Global Academy! </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Mini Developer provides the Coding club for Secondary school students at Palm Global Academy starting from April 2025.</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Proud to collaborate in educating, inspiring and preparing children for the digital future. </Typography>

                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                {/* Testimonial */}
                <Stack direction="column" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4vmin'}} >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className={'page_content'}>
                        <Grid item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography component="h3" variant='h4' style={{alignItems: 'center', textAlign: 'center', color: '#4682b4', fontWeight: 'bold'}}> Do you know what our Customers say about us?  </Typography>
                        </Grid>

                    </Grid>
                    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                         <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                className={'blue_btn'}
                                LinkComponent={'a'} href={'/testimonials'}
                            > See More </Button>
                        </Grid>
                        <Grid container columns={{ xs: 2, sm: 8, md: 12 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Grid item sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                <video playsInline autoPlay muted loop poster="/testimonial_thumb.png" width={'85%'}>
                                    <source src="/testimonial.mp4" type="video/mp4" />
                                    Your browser does not support this video.
                                </video>
                            </Grid>
                        </Grid>

                    </Stack>
                </Stack>

                {/* Our Teaching Section */}
                <Stack direction="column" spacing={2} className="page_content_dark" sx={{ p: 2, display:'flex', justifyContent:'center', alignItems: 'center', textAlign: 'center' }}>
                    <Typography
                        component="h3"
                        variant="h4"
                        sx={{ color: '#fed677', fontWeight: 'bold' }}
                    >
                        Our Classes combine Knowledge with Fun
                    </Typography>
                    <Typography component="p" variant="body1" sx={{ color: 'white' }}>
                        Our coding classes help children build valuable skills in life and prepare them for the digital future.
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
                                        width="40%"
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

                {/* The Benefit  */}
                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', margin: '5vmin 2vmin' }} >
                    <Typography component="h3" variant='h4' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> The Benefit of the Early Learning of Coding </Typography>
                    <Typography component="p" variant='body1' style={{ color: '#333440', textAlign: 'center' }}> Apart from improving writing & mathematics skills, Learning Coding boosts STEM. </Typography>
                    <Typography component="p" variant='body1' style={{ color: '#333440', textAlign: 'center' }}> Gives children 5 steps of progress skills in life and prepares them for their future career paths. </Typography>

                    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <img src={benefit} loading="lazy" alt="" width={'85%'} />
                        <Typography component="p" variant='body1' style={{ color: '#333440', fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>Join us on this journey & give your children the opportunity to boost their skills! </Typography>
                    </Stack>
                </Stack>

            </Stack >
        </div>

    )
}