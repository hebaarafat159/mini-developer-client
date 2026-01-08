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
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', background: 'white', padding: '3vw' }} className='screen'>
            <Typography component="h2" variant='h3' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold', whiteSpace: 'pre-line', fontSize: '1.8em' }}>
                Coding Classes <br />
                Term Dates
            </Typography>
            <Stack className='recent-blogs d-block screen'>
                <SEOComponent
                    seoData={{
                        seo_slug: "term-dates",
                        seo_title: "Term Dates | Mini Developer",
                        seo_description: "Stay updated with Mini Developer's term dates of our coding classes for kids. Discover when each term begins, holiday breaks, and key dates to ensure your child doesn't miss out.",
                        meta_description: "Stay updated with Mini Developer's term dates of our coding classes for kids. Discover when each term begins, holiday breaks, and key dates to ensure your child doesn't miss out.",
                        meta_keywords: "coding classes term dates, kids coding schedule, Mini Developer term dates, coding course calendar, children's coding classes, term start dates, coding class timetable, Mini Developer schedule, coding education dates",
                    }} />
                {/* current term date section */}
                <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: 'linear-gradient(to bottom, #9192ca, #FFFFFF);', padding: '3vmin' }} >
                    <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                            <img src={term_dates_img} loading="lazy" alt="" width={'80%'} />
                        </Grid>
                        <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center', padding: '7.5vmin', backgroundColor: 'white' }} >
                            <Typography component="h2" variant='h3' style={{ color: '#333440', textAlign: 'left', fontWeight: 'bold', fontSize: '1.3em' }}>
                                {currentTerm.title}
                            </Typography>

                            {(currentTerm.sections && currentTerm.sections.length > 0) ?
                                currentTerm.sections.map((section, index) => (
                                    <>
                                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'left', paddingTop: '2.5vmin' }}>{section.title}</Typography>
                                        <Typography component="p" variant='p' style={{ color: '#333440' , paddingBottom: '2.5vmin' }}> {section.start_date}</Typography>

                                        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', textAlign: 'left', paddingTop: '1.5vmin' }}>{section.end_date}</Typography>
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
                    <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em' }}>
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
                                                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'left', paddingTop: '2.5vmin' }}>{section.title}</Typography>
                                                        <Typography component="p" variant='p' style={{ color: '#333440' , paddingBottom: '2.5vmin'}}> {section.start_date}</Typography>

                                                        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', textAlign: 'left', paddingTop: '1.5vmin' }}>{section.end_date}</Typography>
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
        </Stack>
    );
}