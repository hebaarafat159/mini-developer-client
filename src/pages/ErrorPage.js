import React from 'react'
import { Stack, Typography } from '@mui/material'
// import check from '../assets/check.png'

export default function ErrorPage() {
    // set page title
    document.title = ' Website Off | Mini Developer';
    return (
        <Stack className='recent-blogs d-block screen' sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', paddingLeft: '6vw', paddingRight: '6vw' }}>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw' }} >
                <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '2vw' }} >
                    {/* <img src={check} loading="lazy" alt="" style={{ width: '50px', padding: '1vmin' }} /> */}
                    <Stack direction="column" >
                        <Typography component="h4" variant='h4' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bolder', padding: '1vmin' }}>  Ooooooops, Apologies, something went wrong on our website. Please try again later. </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
