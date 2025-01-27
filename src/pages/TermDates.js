import { Stack, List, Divider, Typography, ListItemDecorator, ListItemContent, Card } from "@mui/joy";
import { Grid } from "@mui/material";
import term_dates_img from '../assets/term_dates_img.png'
import SEOComponent from '../components/SEOComponent.js'
import React, { useEffect, useState } from 'react'


export default function TermDates() {

    const [termDates, setTermDates] = useState([])
    const [currentTerm, setCurrentTerm] = useState({})

    // eslint-disable-next-line 
    function setSelectedTerm() {
        termDates.forEach(term => {
            if (term.is_current_term) {
                setCurrentTerm(term);
                // alert("Current Dates: " + JSON.stringify(term));
            }
        });
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/classrooms/termdates/${process.env.REACT_APP_CURRENT_TERM_YEAR}`)
            .then(response => response.json())
            .then(result => {
                setTermDates(result.body);
                // alert("Term Dates: " + JSON.stringify(result.body));
                setSelectedTerm();
            })
    }, [setSelectedTerm]);
    // }, [termDates, setSelectedTerm]);


    return (
        <Stack className='recent-blogs d-block screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "term-dates",
                    seo_title: "Term Dates | Mini Developer",
                    seo_description: "Stay updated with Mini Developer's term dates of our coding classes for kids. Discover when each term begins, holiday breaks, and key dates to ensure your child doesn't miss out on our engaging and educational coding programs. Plan your schedule with ease and keep your child on track for a fun and productive learning journey!"
                }} />
            {/* current term date section */}
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-around', alignItems: 'center', background: 'linear-gradient(to bottom, #9192ca, #FFFFFF);', padding: '3vmin' }} >
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }} width={'70%'}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={term_dates_img} loading="lazy" alt="" width={'100%'} />
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

                <Divider component="div" sx={{ my: 2 }} />
                <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                    Academic Year {process.env.REACT_APP_CURRENT_TERM_YEAR}
                </Typography>
                <Divider component="div" sx={{ my: 2 }} />

                <List sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    {(termDates && termDates.length > 0) ?
                        termDates.map((termDate, index) => (

                            <Grid container key={index} columns={{ xs: 2, sm: 8, md: 12 }}>
                                {/* title and duration dates  */}
                                <Grid item xs={2} >
                                    <ListItemContent >
                                        <Typography component="h5" variant='h6' style={{ color: '#333440', fontWeight: 'bold', padding: '1vmin auto' }}>{termDate.title}</Typography>
                                        <Typography component="p" variant='p' style={{ color: '333440' }}>{termDate.duration}</Typography>
                                    </ListItemContent>
                                </Grid>
                                <Grid container xs={8} >
                                    <Grid item xs={2} >
                                        <ListItemDecorator
                                            sx={{
                                                '&:before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    height: '100%',
                                                    width: '.2vmin',
                                                    bgcolor: 'divider',
                                                    // left: '1vmin',
                                                    top: '2vmin'
                                                },
                                                alignItems: 'center',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                            <svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="8%" height="8%" viewBox="0 0 200 200" role="presentation" aria-hidden="true" aria-label="">
                                                <g>
                                                    <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                                                </g>
                                            </svg>
                                        </ListItemDecorator>
                                    </Grid>
                                    {/* term dates section */}
                                    <Grid item xs={8}>
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
                                    </Grid>
                                </Grid>
                            </Grid>
                        )) : null}
                </List>

            </Stack>
        </Stack>
    );
}