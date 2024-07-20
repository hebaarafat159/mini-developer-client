import React from 'react'
// eslint-disable-next-line
import { Button, Card, Stack, Typography, Grid } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton'
import ExploreButtonComponent from '../components/ExploreButtonComponent'
import home_first_paragraphe_img from '../assets/home_first_paragraphe_img.jpg'
import news_img from '../assets/news_img.png'
import why_img from '../assets/why-learn-coding-at-a-young-age-mini-coding-coding-for-kids-life-fun.gif'
// eslint-disable-next-line
import roadmap from '../assets/mini-developer-roadmap-learning-coding-for-children.png'
import creative_img from '../assets/creative_img.png'
import logical_thinking_img from '../assets/logical_thinking_img.png'
import collaboration_img from '../assets/collaboration_img.png'
import digital_literacy_img from '../assets/digital_literacy_img.png'

export default function Home() {

    // set page title
    document.title = ' Home | Mini Developer';

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
        <Card className='recent-blogs d-block'>
            {/* news Bar  */}
            <Stack direction="row" spacing={1} sx={{ height: '15%', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, #e73da0, #cf559c);', padding: '1vmin' }} >
                <Grid container xs={12} columns={{ xs: 3, sm: 8, md: 12 }} sx={{ alignItems: 'center', padding: '1vmin' }}>
                    <Grid item xs={8} sx={{ alignItems: 'center' }}>
                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Typography component="h3" variant='h5' style={{ color: 'white', textAlign: 'right', fontWeight: 'bold' }}> Exciting News!! </Typography>
                            <Typography component="p" variant='p' style={{ color: 'white', fontStyle: 'italic', textAlign: 'center' }}> Booking Open for Autumn 2024 Term – Join  Our <span style={{ fontWeight: 'bolder' }}>In-Person and Online </span>Classes! </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            className={'blue_btn'}
                            onClick={() => window.scroll({
                                top: (document.body.offsetTop + 550),
                                left: 0,
                                behavior: 'smooth',
                            })}> Read More</Button>
                    </Grid>
                </Grid>
            </Stack>
            <Stack direction="column" spacing={2} sx={{ my: 1, padding: '2vmin', flexGrow: 1 }}>
                {/* first section  */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Typography component="h3" variant='h4' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> Build your Child's Valuable Coding & Problem-Solving Skills</Typography>
                                <Typography component="h5" variant='h6' style={{ color: '#333440', fontStyle: 'italic', textAlign: 'center' }}> Empower your child with creativity & logical thinking through our Fun & Interactive </Typography>
                                <Typography component="h5" variant='h6' style={{ color: '#333440', textShadow: '0px 2px #c3c3c7', fontStyle: 'italic' }}> Coding Classes </Typography>
                                <Stack direction="row" spacing={1} >
                                    <FreeTrialButton course={null} />
                                    <ExploreButtonComponent />
                                    {/* <Button
                                        variant="contained"
                                        className={'gray_btn'}
                                        onClick={() => window.scroll({
                                            top: document.body.offsetHeight,
                                            left: 0,
                                            behavior: 'smooth',
                                        })}> Learn More</Button> */}
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={home_first_paragraphe_img} loading="lazy" alt="" width={'100%'} />
                        </Grid>
                    </Grid>
                </Stack>

                {/* News Events */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: '#333440', padding: '2vw' }} >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img src={news_img} loading="lazy" alt="" width={'100%'} />
                        </Grid>
                        <Grid item xs={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} width={'100%'} >
                                <Typography component="h3" variant='h4' style={{ color: '#fed677', textAlign: 'center', fontWeight: 'bold' }}> News & Events </Typography>
                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Vacancies Available in our Online Classes </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Coding is Fun</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}>We're glad to announce that Booking is now Open for the <br /> Autumn term which begins in September 2024 in our <br /> in-person and also our Online classes.</Typography>

                                <Stack direction="row" spacing={1} >
                                    <FreeTrialButton course={null} />
                                </Stack>

                                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}> Coding in Ealing Council Libraries! </Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Mini Developer partners with Ealing Council Libraries <br /> starting from September term 2023.</Typography>
                                <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Proud to work together to spread the knowledge, benefit <br />the community and prepare children for the digital future. </Typography>

                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                {/* The Benefit  */}
                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >
                    <Typography component="h3" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'start' }}> The Benefit of the Early Learning of Coding </Typography>
                    <Typography component="p" variant='p' style={{ color: '#333440' }}> Apart from improving writing & mathematics skills, Learning Coding boosts STEM. </Typography>
                    <Typography component="p" variant='p' style={{ color: '#333440' }}> Gives children 5 steps of progress skills in life and eventually in the workforce. </Typography>

                    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <img src={why_img} loading="lazy" alt="" width={'50%'} />
                        <Typography component="p" variant='p' style={{ color: '#333440', fontStyle: 'italic', textAlign: 'center' }}>Join us on this journey & give your children the opportunity to boost their skills. </Typography>
                    </Stack>
                </Stack>

                {/* Our Teaching */}
                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw', background: '#333440' }} >
                    <Typography component="h3" variant='h4' style={{ color: '#fed677', fontWeight: 'bold', textAlign: 'start' }}>  Our Teaching program combines Knowledge with Fun  </Typography>
                    <Typography component="p" variant='p' style={{ color: 'white' }}> Our coding program assists children to build valuable skills in life and eventually in the workforce </Typography>
                    <Grid container columns={{ xs: 2, sm: 8, md: 16 }}>
                        {teachingTopics.map((detail, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index} sx={{ justifyContent: 'center', alignItems: 'center', margin: '1vmin auto' }}>
                                <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <img src={detail.icon} loading="lazy" alt="" width={'50%'} style={{ backgroundColor: 'transparent' }} />
                                    <Typography component="h5" variant='h5' style={{ color: '#ed5977', textAlign: 'center' }}> {detail.title} </Typography>
                                    <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center', padding: '2vw' }}> {detail.description} </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Your Coding Journey */}
                {/* <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw', alignItems: 'center', }} >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Typography component="h3" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'center', padding: '2vmin auto' }}> Your Coding Journey </Typography>
                            <Typography component="h5" variant='h6' style={{ color: '#333440', textAlign: 'center', padding: '2vw auto' }}> Our program levels are tailored to take you from-Zero-to-Hero! </Typography>
                            <Typography component="h5" variant='h6' style={{ color: '#333440', textAlign: 'center', padding: '2vw auto' }}> Covering everything from basic and advanced coding concepts </Typography>
                            <Typography component="h5" variant='h6' style={{ color: '#333440', textAlign: 'center', padding: '2vw auto' }}> to different paths you can take as a professional developer. </Typography>

                            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly' }}>
                                <FreeTrialButton course={null} />
                                <ExploreButtonComponent />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={roadmap} loading="lazy" alt="" width={'100%'} />
                        </Grid>
                    </Grid>
                </Stack> */}
            </Stack>
        </Card >
    )
}