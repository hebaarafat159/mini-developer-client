import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'
import FreeTrialButton from './FreeTrialButton'
import term_dates_img from '../assets/term_dates_img.png'
import SEOComponent from './SEOComponent.js'

export default function WhyUsComponent() {

    return (
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: '#333440', padding: '2vw' }} >
            <SEOComponent
                seoData={{
                    seo_slug: "why-us",
                    seo_title: "Why Us? | Mini Developer",
                    seo_description: "Here is why you would surely want to choose Mini Developer Coding classes for children."
                }} />
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw' }} >
                        <Typography component="h4" variant='h6' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}>
                            Build your Child's Valuable Coding & Problem-Solving Skills
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * Sessions are run by qualified experienced <span style={{ fontWeight: 'bold' }}> Software Developers </span>.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * All tutors are<span style={{ fontWeight: 'bold' }}> DBS </span>checked. <span style={{ fontWeight: 'bold' }}> Software Developers </span>.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * All our staff is trained for children<span style={{ fontWeight: 'bold' }}> safeguarding</span>.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * Our interactive program enables children to learn<span style={{ fontWeight: 'bold' }}>  coding with fun</span>.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * Our students gain greater confidence in technology and coding.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * We provide <span style={{ fontWeight: 'bold' }}>in-person</span> lessons and online lessons to suit all needs.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440' }}>
                            * Accomplishment <span style={{ fontWeight: 'bold' }}>Certificates presented</span>.
                        </Typography>
                        <FreeTrialButton course={null} />
                    </Stack>

                </Grid>
                <Grid item xs={6}>
                    <img src={term_dates_img} loading="lazy" alt="" width={'105%'} />
                </Grid>
            </Grid>
        </Stack>
    )
}