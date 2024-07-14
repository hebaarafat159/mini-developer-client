import React from 'react'
import { Stack } from '@mui/material'
import FooterContactUs from './FooterContactUs'
import cssStyle from '../css/styles.module.css'

export default function Footer() {
    return (
        <Stack direction="column" spacing={1} className={cssStyle.Footer}>
            <FooterContactUs />
        </Stack>
    )
}