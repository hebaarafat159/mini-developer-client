import React from 'react'
import { Stack } from '@mui/material'
import FooterContactUs from './FooterContactUs'

export default function Footer() {
    return (
        <Stack direction="column" spacing={1} className={'Footer'}>
            <FooterContactUs />
        </Stack>
    )
}