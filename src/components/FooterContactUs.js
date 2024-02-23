import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Stack, Typography } from '@mui/material'

export default function FooterContactUs() {
    return (
        <Stack direction="row" spacing={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography style={{ display: 'flex', alignItems:'center' }}>Contact Us</Typography>
            <SocialIcon network="facebook" url='https://www.facebook.com/MiniDeveloperUK' />
            <SocialIcon network="whatsapp" url='+447851496016' />
            <SocialIcon network="instagram" url='https://www.instagram.com/minideveloperuk' />
            <SocialIcon network="email" url='mailto:mini.developer.info@gmail.com' />
        </Stack>
    )
}