import React from 'react'
import { Button, Card, Stack, Typography, Grid } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton'
import ExploreButtonComponent from '../components/ExploreButtonComponent'
import cssStyle from '../css/styles.module.css'
import home_first_paragraphe_img from '../assets/home_first_paragraphe_img.jpg'
import news_img from '../assets/news_img.png'
import why_img from '../assets/why-learn-coding-at-a-young-age-mini-coding-coding-for-kids-life-fun.gif'
import roadmap from '../assets/mini-developer-roadmap-learning-coding-for-children.png'
import creative_img from '../assets/creative_img.png'
import logical_thinking_img from '../assets/logical_thinking_img.png'
import collaboration_img from '../assets/collaboration_img.png'
import digital_literacy_img from '../assets/digital_literacy_img.png'

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
        <Card className='recent-blogs d-block'>
            <Stack direction="column" spacing={2} sx={{ my: 1, padding: '2vw', flexGrow: 1 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Typography component="h3" variant='h5' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}> Build your Child's Valuable Coding & Problem-Solving Skills</Typography>
                        <Typography component="h5" variant='h6' style={{ color: '#333440', fontStyle: 'italic', textAlign: 'center' }}> Empower your child with creativity & logical thinking through our Fun & Interactive </Typography>
                        <Typography component="h5" variant='h6' style={{ color: '#333440', textShadow: '0px 2px #c3c3c7', fontStyle: 'italic' }}> Coding Classes </Typography>
                        <Stack direction="row" spacing={1} >
                            <FreeTrialButton course={null} />
                            <Button
                                variant="contained"
                                className={cssStyle.gray_btn}
                                onClick={() => window.scroll({
                                    top: document.body.offsetHeight,
                                    left: 0,
                                    behavior: 'smooth',
                                })}> Learn More</Button>
                        </Stack>
                    </Stack>
                    <img src={home_first_paragraphe_img} loading="lazy" alt="" width={'50%'} />

                </Stack>

                {/* New Events */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: '#333440', padding: '2vw' }} >
                    <img src={news_img} loading="lazy" alt="" width={'50%'} />
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Typography component="h3" variant='h5' style={{ color: '#fed677', textAlign: 'center', fontWeight: 'bold' }}> News & Events </Typography>
                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', textAlign: 'center' }}> Coding in Ealing Council Libraries! </Typography>
                        <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Mini Developer partners with Ealing Council Libraries  starting from September term 2023.</Typography>
                        <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> Proud to work together to spread the knowledge, benefit the community and prepare children for the digital future. </Typography>

                        <Stack direction="row" spacing={1} >
                            <FreeTrialButton course={null} />
                        </Stack>
                    </Stack>
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
                    <Typography component="h3" variant='h5' style={{ color: '#fed677', fontWeight: 'bold', textAlign: 'start' }}>  Our Teaching program combines Knowledge with Fun  </Typography>
                    <Typography component="p" variant='p' style={{ color: 'white' }}> Our coding program assists children to build valuable skills in life and eventually in the workforce </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {teachingTopics.map((detail, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <img src={detail.icon} loading="lazy" alt="" width={'50%'} />
                                    <Typography component="p" variant='p' style={{ color: '#ed5977', textAlign: 'center' }}> {detail.title} </Typography>
                                    <Typography component="p" variant='p' style={{ color: 'white', textAlign: 'center' }}> {detail.description} </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Your Coding Journey */}
                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw', alignItems: 'center', }} >
                    <Typography component="h3" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bold' }}> Your Coding Journey </Typography>
                    <Typography component="p" variant='p' style={{ color: '#333440' }}> Our program levels are tailored to take you from-Zero-to-Hero! </Typography>
                    <Typography component="p" variant='p' style={{ color: '#333440' }}> Covering everything from basic and advanced coding concepts </Typography>
                    <Typography component="p" variant='p' style={{ color: '#333440' }}> to different paths you can take as a professional developer. </Typography>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                        <FreeTrialButton course={null} />
                        <ExploreButtonComponent />
                    </Stack>
                    <img src={roadmap} loading="lazy" alt="" width={'70%'} />

                </Stack>
            </Stack>
        </Card >
    )
}