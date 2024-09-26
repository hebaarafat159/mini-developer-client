import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

export default function ConfirmationPage() {

    // set page title
    document.title = ' Confirmation | Mini Developer';

    return (
        <Stack className='recent-blogs d-block' sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw' }}>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw' }} >
                <Stack direction="row" width={'80%'} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw' }} >
                    <img src={'https://drive.google.com/thumbnail?id=1k7zjHa2vZ46pjDxN1nFGea7eVlQ15s5N'} loading="lazy" alt="" style={{ padding: '1vmin' }} />
                    <Typography component="h3" variant='h5' style={{ color: '#4682b4', textAlign: 'left', fontWeight: 'bold' }}>Thanks for your interest in Mini Developer courses. We received your registration and a member of the team will be in touch with you soon! </Typography>
                </Stack>
                <Button variant="contained"
                    className={'orage_btn'}
                    LinkComponent={'a'} href={'/'}> Back To Home </Button>
            </Stack>
        </Stack>
    )
}
