import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Stack, Typography, Grid } from '@mui/material'
import library_logo from '../assets/library_logo.png'

export default function FooterContactUs() {
    return (
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center' }} >
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid item xs={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Contact Us</Typography>
                            <SocialIcon network="facebook" url='https://www.facebook.com/MiniDeveloperUK' />
                            <SocialIcon network="whatsapp" url='+447851496016' />
                            <SocialIcon network="instagram" url='https://www.instagram.com/minideveloperuk' />
                            <SocialIcon network="email" url='mailto:mini.developer.info@gmail.com' />
                        </Stack>
                        <Typography style={{ display: 'flex', justifyContent: 'center' }}>©2023 by Mini Developer.</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={library_logo} loading="lazy" alt="" width={'100%'} />
                </Grid>
            </Grid>
        </Stack>
    )
}