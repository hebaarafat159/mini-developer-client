import { Stack, Divider, Typography, Card } from "@mui/joy";
import { Grid } from "@mui/material";
import term_dates_img from '../assets/term_dates_img.png'
import SEOComponent from '../components/SEOComponent.js'
import React, { useEffect, useState, useRef } from 'react'
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";


export default function TermDates() {
    const isFetched = useRef(false);
    const [termDates, setTermDates] = useState([])
    const [currentTerm, setCurrentTerm] = useState({})

    useEffect(() => {
        if (!isFetched.current) {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/classrooms/termdates/${process.env.REACT_APP_CURRENT_TERM_YEAR}`)
                .then(response => response.json())
                .then(result => {
                    if (!result?.body) return;
                    setTermDates(result.body);
                    console.log("Fetching data...");
                    isFetched.current = true;
                    if (result.body != null) {
                        const foundTerm = result.body.find(term => term.is_current_term);
                        if (foundTerm) setCurrentTerm(foundTerm);
                    }
                    console.log("Finish Fetching Data .....");

                })
        }

    }, []);

    return (
        <Stack className='recent-blogs d-block screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "term-dates",
                    seo_title: "Term Dates | Mini Developer",
                    seo_description: "Stay updated with Mini Developer's term dates of our coding classes for kids. Discover when each term begins, holiday breaks, and key dates to ensure your child doesn't miss out on our engaging and educational coding classes. Plan your schedule with ease and keep your child on track for a fun and productive learning journey!"
                }} />
            {/* current term date section */}
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: 'linear-gradient(to bottom, #9192ca, #FFFFFF);', padding: '3vmin' }} >
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                        <img src={term_dates_img} loading="lazy" alt="" width={'80%'} />
                    </Grid>
                    <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center', padding: '7.5vmin', backgroundColor: 'white' }} >
                        <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                            {currentTerm.title}
                            {/* Summer Term 2024 */}
                        </Typography>
                        <Typography component="p" variant='p' style={{ color: '333440', textAlign: 'center' }}>Coding Classes Term Dates</Typography>

                        {(currentTerm.sections && currentTerm.sections.length > 0) ?
                            currentTerm.sections.map((section, index) => (
                                <>
                                    <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'left', padding: '1.5vmin 0' }}>{section.title}</Typography>
                                    <Typography component="p" variant='p' style={{ color: '#333440' }}> {section.start_date}</Typography>

                                    <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', textAlign: 'left' }}>{section.end_date}</Typography>
                                    <Typography component="p" variant='p' style={{ color: '#333440' }}>{section.description}</Typography>

                                </>

                            )) : null}
                    </Grid>
                </Grid>
            </Stack>

            {/* year trem dates sections */}
            <Stack direction="column" spacing={2} sx={{ my: 1, padding: '2vw', flexGrow: 1 }}>

                {/* Academy year section */}
                <Divider component="div" sx={{ my: 2 }} />
                <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                    Academic Year {process.env.REACT_APP_CURRENT_TERM_YEAR}
                </Typography>
                <Divider component="div" sx={{ my: 2 }} />

                {/*  year time line section */}
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >

                    {(termDates && termDates.length > 0) ?
                        termDates.map((termDate, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography component="h5" variant='h6' style={{ color: '#333440', fontWeight: 'bold', padding: '1vmin auto' }}>{termDate.title}</Typography>
                                    <Typography component="p" variant='p' style={{ color: '333440' }}>{termDate.duration}</Typography>
                                    <Card style={{ margin: '1vmin 0' }}>
                                        {(termDate.sections && termDate.sections.length > 0) ?
                                            termDate.sections.map((section, index) => (
                                                <Stack>
                                                    <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'left', padding: '1.5vmin 0' }}>{section.title}</Typography>
                                                    <Typography component="p" variant='p' style={{ color: '#333440' }}> {section.start_date}</Typography>

                                                    <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', textAlign: 'left' }}>{section.end_date}</Typography>
                                                    <Typography component="p" variant='p' style={{ color: '#333440' }}>{section.description}</Typography>

                                                </Stack>

                                            )) : null}
                                    </Card>
                                </TimelineContent>
                            </TimelineItem>
                        )) : null}

                </Timeline>

            </Stack>
        </Stack>
    );
}