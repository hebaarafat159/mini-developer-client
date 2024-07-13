import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Stack, Typography, Grid } from '@mui/material'
import library_logo from '../assets/library_logo.png'

export default function FooterContactUs() {
    return (
        <Stack spacing={1} sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={library_logo} loading="lazy" alt="" width={'100%'} />
                </Grid>
                <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto 1vmin' }}>Contact Us</Typography>
                        <SocialIcon network="facebook" url='https://www.facebook.com/MiniDeveloperUK' width={'50px'} />
                        <SocialIcon network="whatsapp" url='+447851496016' />
                        <SocialIcon network="instagram" url='https://www.instagram.com/minideveloperuk' />
                        <SocialIcon network="email" url='mailto:mini.developer.info@gmail.com' />
                    </Stack>
                </Grid>
            </Grid>
            <Typography variant='p' style={{ display: 'flex', justifyContent: 'center' }}>©2023 by Mini Developer.</Typography>
        </Stack>
    )
}