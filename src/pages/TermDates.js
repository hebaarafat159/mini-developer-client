import { Stack, List, Divider, Typography, ListItemDecorator, ListItemContent } from "@mui/joy";
import { Grid } from "@mui/material";
import term_dates_img from '../assets/term_dates_img.png'
import SEOComponent from '../components/SEOComponent.js'

export default function TermDates() {

    const termDates = [
        {
            title: 'Autumn Term',
            duration: 'Sep 2024 - Dec 2024',
            dates: [
                {
                    startDate: 'Monday 9th of September 2024',
                    lastHalfTermDate: 'Friday 18th of October',
                    halfTermDuration: '21st of October to 25th of October',
                    startHalfTermDate: 'Monday 28th of October',
                    endDate: 'Friday 29th of November 2024'
                }
            ]
        },
        {
            title: 'Spring Term',
            duration: 'Jan 2025 - Apr 2025',
            dates: [
                {
                    startDate: 'Monday 13th of January 2025',
                    lastHalfTermDate: 'Friday 14th of February',
                    halfTermDuration: '17th of February to 21st of February',
                    startHalfTermDate: 'Monday 24th of February',
                    endDate: 'Friday 4th of April 2025'
                }
            ]
        },
        {
            title: 'Summer Term',
            duration: 'Apr 2025 - Jul 2025',
            dates: [
                {
                    startDate: 'Monday 28th of April 2025',
                    lastHalfTermDate: 'Friday 23rd of May',
                    halfTermDuration: '26th of May to 30th of May',
                    startHalfTermDate: 'Monday 2nd of June',
                    endDate: 'Friday 18th of July 2025'
                }
            ]
        }
    ]

    return (
        <Stack className='recent-blogs d-block screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "term-dates",
                    seo_title: "Term Dates | Mini Developer",
                    seo_description: "Stay updated with Mini Developer's term dates of our coding classes for kids. Discover when each term begins, holiday breaks, and key dates to ensure your child doesn't miss out on our engaging and educational coding programs. Plan your schedule with ease and keep your child on track for a fun and productive learning journey!"
                }} />
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-around', alignItems: 'center', background: 'linear-gradient(to bottom, #9192ca, #FFFFFF);', padding: '3vmin' }} >
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }} width={'70%'}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={term_dates_img} loading="lazy" alt="" width={'100%'} />
                    </Grid>
                    <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center', padding: '7.5vmin', backgroundColor: 'white' }} >
                        <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                            Summer Term 2024
                        </Typography>
                        <Typography component="p" variant='p' style={{ color: '333440', textAlign: 'center' }}>Coding Classes Term Dates</Typography>

                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', textAlign: 'left' }}>Term Starts</Typography>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}> {termDates[0].dates[0]['startDate']}</Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', textAlign: 'left' }}>{termDates[0].dates[0]['lastHalfTermDate']}</Typography>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}>Last day of half-term for pupils</Typography>

                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold' }}>Half Term Holiday</Typography>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}>{termDates[0].dates[0]['halfTermDuration']}</Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold' }}>{termDates[0].dates[0]['startHalfTermDate']}</Typography>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}>Return to class for second half-term.</Typography>

                        <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', padding: '1vmin auto' }}>Term Ends</Typography>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}>{termDates[0].dates[0]['endDate']}</Typography>

                    </Grid>
                </Grid>
            </Stack>


            <Stack direction="column" spacing={2} sx={{ my: 1, padding: '2vw', flexGrow: 1 }}>

                <Divider component="div" sx={{ my: 2 }} />
                <Typography component="h2" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                    Academic Year 2024/2025
                </Typography>
                <Divider component="div" sx={{ my: 2 }} />

                <List sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    {termDates.map((termDate, index) => (

                        <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
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
                                <Grid item xs={8}>
                                    {termDate.dates.map((date, index) => (
                                        <ListItemContent style={{ margin: '0 auto 3vmin auto' }}>
                                            <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold' }}>Term Starts</Typography>
                                            <Typography component="p" variant='p' style={{ color: '#333440' }}> {date.startDate}</Typography>

                                            <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold' }}>{date.lastHalfTermDate}</Typography>
                                            <Typography component="p" variant='p' style={{ color: '#333440' }}>Last day of half-term for pupils</Typography>

                                            <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold' }}>Half Term Holiday</Typography>
                                            <Typography component="p" variant='p' style={{ color: '#333440' }}>{date.halfTermDuration}</Typography>

                                            <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold' }}>{date.startHalfTermDate}</Typography>
                                            <Typography component="p" variant='p' style={{ color: '#333440' }}>Return to class for second half-term.</Typography>

                                            <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', padding: '1vmin auto' }}>Term Ends</Typography>
                                            <Typography component="p" variant='p' style={{ color: '#333440' }}>{date.endDate}</Typography>
                                        </ListItemContent>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </List>

            </Stack>
        </Stack>
    );
}