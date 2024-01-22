import React from 'react'
import { Stack, Typography } from '@mui/material'
import FooterContactUs from './FooterContactUs'
import cssStyle from '../css/styles.module.css'

export default function Footer() {
    return (
        <Stack direction="column" spacing={1} className={cssStyle.Footer}>
            <FooterContactUs />
            <Typography style={{ display: 'flex', justifyContent: 'center' }}>©2023 by Mini Developer.</Typography>
        </Stack>
    )
}