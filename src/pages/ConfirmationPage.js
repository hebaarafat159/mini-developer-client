import React from 'react'
import cssStyle from '../css/styles.module.css'
import { Stack, Typography, Button, Card } from '@mui/material'

export default function ConfirmationPage() {
    return (
        <Card className={cssStyle.page}>
            <Stack spacing={1} className={cssStyle.register_form_component} >

                <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#ed7d45' }} >Your Registration has been send to MINI developer, one of our team memeber will answer you shortly </Typography>
                <Button variant="contained"
                    className={cssStyle.orage_btn}
                    LinkComponent={'a'} href={'/'}> Back To Home </Button>
            </Stack>
        </Card>
    )
}
