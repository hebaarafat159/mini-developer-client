import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'
// import library_logo from '../assets/library_logo.png'
import app_logo from '../assets/logo_icon.png'
// import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faSquareWhatsapp,
//     faSquareFacebook,
//     faSquareInstagram
// } from "@fortawesome/free-brands-svg-icons";

import { faFacebook, faWhatsapp, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";

// import email_icon from '../assets/email_footer_icon.png'
export default function FooterContactUs() {
    return (
        <Stack spacing={1} sx={{ display: 'flex', direction: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={app_logo} loading="lazy" alt="" width={'70%'} />
                </Grid>
                <Grid item xs={8} sx={{ justifyContent: 'center', alignItems: 'center', padding: '2vmin' }}>
                    <Stack direction="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Typography variant='p' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto 1vmin' }}>Contact Us</Typography> */}

                        <a href={process.env.REACT_APP_CONTACT_US_WHATS_APP}
                            className="whatsapp social">
                            {/* <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" /> */}
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" color='black' />
                        </a>
                        <a href={process.env.REACT_APP_CONTACT_US_FACEBOOK}
                            className="facebook social">
                            {/* <FontAwesomeIcon icon={faSquareFacebook} size="2x" /> */}
                            <FontAwesomeIcon icon={faFacebook} size="2x" color='black' />
                        </a>
                        <a href={`mailto:${process.env.REACT_APP_CONTACT_US_GMAIL}`}>
                            {/* <img src={email_icon} loading="lazy" alt="" width={'30vmin'} /> */}
                            <FontAwesomeIcon icon={faGoogle} size="2x" color='black' />
                            {/* <FontAwesomeIcon icon={faSquareGooglePlus} size="2x" /> */}
                        </a>
                        <a href={process.env.REACT_APP_CONTACT_US_INSTAGRAM}
                            className="instagram social">
                            {/* <FontAwesomeIcon icon={faSquareInstagram} size="2x" /> */}
                            <FontAwesomeIcon icon={faInstagram} size="2x" color='black' />
                        </a>
                    </Stack>
                </Grid>
            </Grid>
            <Typography variant='p' style={{ textAlign: 'center', paddingBottom: '2vmin' }}>©2023 by Mini Developer.</Typography>
        </Stack>
    )
}