import React from 'react'
import { Stack } from '@mui/material'
import FooterContactUs from './FooterContactUs'
import '../App.css'

export default function Footer() {
    return (
        <Stack direction="column" spacing={1} className={'footer'}>
            <FooterContactUs />
        </Stack>
    )
}