import { Card, Stack, List, Divider, Typography, ListItemDecorator, ListItemContent } from "@mui/joy";
import { Grid } from "@mui/material";

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

export default function TermDates() {
    return (
        <Card className='recent-blogs d-block'>
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
                                        <ListItemContent>
                                            <Typography component="h5" variant='h6' style={{ color: '#ed7d45', fontWeight: 'bold', padding: '1vmin auto' }}>Term Starts</Typography>
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
                        // <Stack direction="row" spacing={2} sx={{ my: 1, padding: '2vw', flexGrow: 1 }}>

                        //     <ListItemContent >
                        //         <Typography level="title-sm">{termDate.title}</Typography>
                        //         <Typography level="body-xs">{termDate.duration}</Typography>
                        //     </ListItemContent>

                        //     <ListItem key={index} sx={{ alignItems: 'baseline' }}>
                        //         <ListItemDecorator
                        //             sx={{
                        //                 '&:before': {
                        //                     content: '""',
                        //                     position: 'absolute',
                        //                     height: '100%',
                        //                     width: '.2vmin',
                        //                     bgcolor: 'divider',
                        //                     left: 'calc(var(--ListItem-paddingLeft) + 1vmin)',
                        //                     top: '10%',
                        //                 },
                        //             }}>
                        //             <svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="5%" height="5%" viewBox="0 0 200 200" role="presentation" aria-hidden="true" aria-label="">
                        //                 <g>
                        //                     <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                        //                 </g>
                        //             </svg>
                        //             {/* <Avatar
                        //                 src={experience.logo ? experience.logo : 'buildings.png'}
                        //                 sx={{ '--Avatar-size': '4vmin' }} */}
                        //             {/* /> */}
                        //         </ListItemDecorator>
                        //         {termDate.dates.map((date, index) => (
                        //             <ListItemContent>
                        //                 <Typography level="title-sm">{date.startDate}</Typography>
                        //                 <Typography level="title-sm">{date.lastHalfTermDate}</Typography>
                        //                 <Typography level="title-sm">{date.halfTermDuration}</Typography>
                        //                 <Typography level="title-sm">{date.startHalfTermDate}</Typography>
                        //                 <Typography level="title-sm">{date.endDate}</Typography>
                        //             </ListItemContent>
                        //         ))}
                        //     </ListItem>
                        // </Stack>
                    ))}
                </List>

            </Stack>
        </Card>
    );
}