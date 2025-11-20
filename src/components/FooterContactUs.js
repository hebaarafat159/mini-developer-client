import React from 'react'
import { Stack, Typography, Grid, Link } from '@mui/material'
import app_logo from '../assets/logo_icon.png'
import email_icon from '../assets/email_footer_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
import instagram_icon from '../assets/instagram_icon.png'

export default function FooterContactUs() {
    return (
        <Stack direction="column" sx={{  justifyContent: 'center', alignItems: 'center'}} >
            <Link href="/" sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                <img src={app_logo} loading="lazy" alt="Home" width={'20%'} height={'auto'} />
            </Link>
            <Grid item xs={8} sx={{ display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center'}}>

                <a href={process.env.REACT_APP_CONTACT_US_WHATS_APP}
                    className="whatsapp social">
                    {/* <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" /> */}
                    <img src={whatsapp_icon} loading="lazy" alt="" width={'30vmin'} />
                </a>
                <a href={process.env.REACT_APP_CONTACT_US_FACEBOOK}
                    className="facebook social">
                    {/* <FontAwesomeIcon icon={faSquareFacebook} size="2x" /> */}
                    <img src={facebook_icon} loading="lazy" alt="" width={'30vmin'} />
                </a>
                <a href={`mailto:${process.env.REACT_APP_CONTACT_US_GMAIL}`}>
                    <img src={email_icon} loading="lazy" alt="" width={'30vmin'} />
                    {/* <FontAwesomeIcon icon={faSquareGooglePlus} size="2x" /> */}
                </a>
                <a href={process.env.REACT_APP_CONTACT_US_INSTAGRAM}
                    className="instagram social">
                    {/* <FontAwesomeIcon icon={faSquareInstagram} size="2x" /> */}
                    <img src={instagram_icon} loading="lazy" alt="" width={'30vmin'} />
                </a>
            </Grid>
            <Typography variant='p' style={{ textAlign: 'center', fontSize: 12, padding: '2vmin' }}>©2023 by Mini Developer.</Typography>
        </Stack>

    )
}