import React from 'react'
import cssStyle from '../css/styles.module.css'
import { Stack, Typography, Button, Card } from '@mui/material'

export default function ConfirmationPage() {

    // set page title
    document.title = ' Confirmation | Mini Developer';

    return (
        <Card className='recent-blogs d-block'>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', background: 'white', padding: '3vw' }} >
                <Typography component="h3" variant='h5' style={{ color: '#4682b4', textAlign: 'center', fontWeight: 'bold' }}>Your Registration has been send to MINI developer, one of our team memeber will answer you shortly </Typography>
                <Button variant="contained"
                    className={cssStyle.orage_btn}
                    LinkComponent={'a'} href={'/'}> Back To Home </Button>
            </Stack>
        </Card>
    )
}
