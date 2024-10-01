import React from 'react'
import { Stack } from '@mui/material'
import TestimonialsComponent from '../components/TestimonialsComponent.js'

export default function Testimonials() {

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >
            <TestimonialsComponent testimonialsCount={0} />
        </Stack>
    )
}