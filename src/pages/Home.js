import React from 'react'
import { Button, Card, Stack, Typography } from '@mui/material'
import HomeFreeTrialButton from '../components/FreeTrialButton'
import ExploreButtonComponent from '../components/ExploreButtonComponent'
import image from '../assets/mini-developer-logo.png'
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
    return (
        <Card className={cssStyle.page}>
            <Stack
                direction="column"
                spacing={2}>
                <Stack direction="row" spacing={2} className={cssStyle.page_content}>
                    <Stack spacing={1}>
                        <Typography style={{ fontWeight: 'bolder', fontSize: '2vw', color: '#4682b4' }}> Build your Child's Valuable Coding & Problem-Solving Skills</Typography>
                        <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Empower your child with creativity & logical thinking through our Fun & Interactive </Typography>
                        <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#333440' }} > Coding Classes </Typography>
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'flex', padding: '5vmin' } }} >
                            <HomeFreeTrialButton />
                            <Button variant="contained" style={{
                                borderRadius: 10,
                                background: 'linear-gradient(to bottom, #d6d7de, #b2b2b2)',
                                fontSize: "2.5vmin",
                                color: "#5f6276"
                            }}
                                onClick={() => window.scroll({
                                    top: document.body.offsetHeight,
                                    left: 0,
                                    behavior: 'smooth',
                                })}> Learn More</Button>
                        </Stack>
                    </Stack>
                    <img src={home_first_paragraphe_img} className={cssStyle.contentImage} loading="lazy" alt="" />
                </Stack>

                {/* New Events */}

                <Stack direction="row" spacing={2} className={cssStyle.page_content_dark}>
                    <img src={news_img} className={cssStyle.contentImage} loading="lazy" alt="" width={'30%'} />
                    <Stack spacing={1} sx={{ flexGrow: 1 }} width={'70%'}>
                        <Typography style={{ fontWeight: 'bolder', fontSize: '1.5vw', color: '#fed677' }}> News & Events </Typography>
                        <Typography style={{ fontSize: '1.5vw', color: '#ed7d45' }}> Coding in Ealing Council Libraries!</Typography>
                        <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: 'white' }}> Mini Developer partners with Ealing Council Libraries  starting from September term 2023.
                            Proud to work together to spread the knowledge, benefit the community and prepare children for the digital future. </Typography>
                        <Stack direction="row" spacing={2} >
                            <HomeFreeTrialButton />
                        </Stack>
                    </Stack>

                </Stack>


                {/* The Benefit  */}
                <Stack direction="row" spacing={2} className={cssStyle.page_content}>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Typography component="h1" variant="h1" style={{ fontWeight: 'bolder', fontSize: '1.5vw', color: '#ed7d45' }}>The Benefit of the Early Learning of Coding</Typography>
                        <Typography component="h2" variant="h1" style={{ fontSize: '1.5vw', color: '#333440' }}>Apart from improving writing & mathematics skills, Learning Coding boosts STEM.
                            Gives children 5 steps of progress skills in life and eventually in the workforce. </Typography>
                        <img src={why_img} loading="lazy" alt="" width={'700vw'} />
                        <Typography component="h2" variant="h1" style={{ fontSize: '1.5vw', color: '#333440' }}> Join us on this journey & give your children the opportunity to boost their skills. </Typography>
                    </Stack>
                </Stack>

                {/* Our Teaching */}
                <Stack direction="row" spacing={2} className={cssStyle.page_content_dark}>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#fed677' }}> Our Teaching program combines Knowledge with Fun </Typography>
                        <Typography style={{ fontSize: '1.5vw', color: 'white' }}> Our coding program assists children to build valuable skills in life and eventually in the workforce</Typography>
                        <Stack direction="row" spacing={2} >
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <img src={creative_img} className={cssStyle.subContentImage} loading="lazy" alt="" />
                                <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#ed5977' }}> Creativity </Typography>
                                <Typography style={{ fontWeight: 'normal', fontSize: '1vw', color: 'white' }}> Generating ideas, alternatives, or possibilities to solve problems. </Typography>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <img src={logical_thinking_img} className={cssStyle.subContentImage} loading="lazy" alt="" />
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#ed5977' }}> Logical Thinking </Typography>
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1vw', color: 'white' }}> Developing problem-solving and critical-thinking skills </Typography>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <img src={collaboration_img} className={cssStyle.subContentImage} loading="lazy" alt="" />
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#ed5977' }}> Collaboration </Typography>
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1vw', color: 'white' }}> Enhancing communication and collaboration skills </Typography>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <img src={digital_literacy_img} className={cssStyle.subContentImage} loading="lazy" alt="" />
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#ed5977' }}> Digital Literacy </Typography>
                                <Typography component="h1" variant="h1" style={{ fontWeight: 'normal', fontSize: '1vw', color: 'white' }}> Providing an understanding of technology and how it shapes our world </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Your Coding Journey */}
                <Stack direction="row" spacing={2} className={cssStyle.page_content}>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Typography style={{ fontWeight: 'bolder', fontSize: '1.5vw', color: '#333440' }}>Your Coding Journey</Typography>
                        <Typography style={{ fontSize: '1.5vw', color: '#333440' }}>Our program levels are tailored to take you from-Zero-to-Hero!
                            Covering everything from basic and advanced coding concepts
                            to different paths you can take as a professional developer.
                            Become a Coding Maestro!</Typography>
                        <Stack direction="row" spacing={2} >
                            <HomeFreeTrialButton />
                            <ExploreButtonComponent />
                        </Stack>
                        <img src={roadmap} loading="lazy" alt="" width={'800vw'} />
                    </Stack>
                </Stack>
            </Stack>
        </Card >
    )
}