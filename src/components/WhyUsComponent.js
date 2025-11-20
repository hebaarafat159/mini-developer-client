import React from 'react'
import { Stack, Grid } from '@mui/material'
import FreeTrialButton from './FreeTrialButton'
import why_us from '../assets/why_us.jpg'
import SEOComponent from './SEOComponent.js'

export default function WhyUsComponent() {

    return (
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: '#333440', padding: '2vw' }} className='screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "/about-us/why-us",
                    seo_title: "Why Us? | Mini Developer",
                    seo_description: "Here is why you would surely want to choose Mini Developer Coding classes for children."
                }} />
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', padding: '3vw' }} >
                        <img src={why_us} loading="lazy" alt="" width={'105%'} />
                        <FreeTrialButton course={null} />
                    </Stack>

                </Grid>
            </Grid>
        </Stack>
    )
}