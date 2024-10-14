import React from 'react'
import { Stack } from '@mui/material'
import TestimonialsComponent from '../components/TestimonialsComponent.js'
import SEOComponent from '../components/SEOComponent.js'

export default function Testimonials() {

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >
            <SEOComponent
                seoData={{
                    seo_slug: "testimonials",
                    seo_title: "Testimonials | Mini Developer",
                    seo_description: "what our customers say about us!!"
                }} />
            <TestimonialsComponent testimonialsCount={0} />
        </Stack>
    )
}