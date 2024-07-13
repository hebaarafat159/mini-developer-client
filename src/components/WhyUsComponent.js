import React from 'react'
import { Stack, Typography } from '@mui/material'
import FreeTrialButton from './FreeTrialButton'

export default function WhyUsComponent() {

    // set page title
    document.title = ' Why Us | Mini Developer';

    return (
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', background: '#333440', padding: '2vw' }} >
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
            {/* <img src={why_img} loading="lazy" alt="" width={'30%'} /> */}

        </Stack>
    )
}