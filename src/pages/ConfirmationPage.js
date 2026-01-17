import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import check from '../assets/check.png'
export default function ConfirmationPage() {

    const { pageTitle } = useParams();
    // set page title
    document.title = ' Confirmation | Mini Developer';
    let text = (pageTitle === "feedback") ? "Thanks for sharing your Feedback With us" : "Thank you for your interest in Mini Developer coding classes. We received your registration and a member of the team will be in touch with you soon! ";
    return (
        <Stack className='recent-blogs d-block screen' sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', paddingLeft: '6vw' , paddingRight: '6vw' }}>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '3vw'}} >
                <Stack direction="row"  sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '2vw' }} >
                    <img src={check} loading="lazy" alt="" style={{ width: '50px' ,padding: '1vmin' }} />
                    <Stack direction="column" >
                        <Typography component="h4" variant='h4' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bolder', fontFamily: 'Papyrus', padding: '1vmin' }}>  Coding is the Language of the Future! </Typography>
                        <Typography component="h6" variant='h6' style={{ color: 'black', textAlign: 'left', padding: '1vmin' }}>{text}</Typography>
                    </Stack>
                </Stack>
                <Button variant="contained"
                    className={'orage_btn'}
                    LinkComponent={'a'} href={'/'}> Back To Home Page </Button>
            </Stack>
        </Stack>
    )
}
