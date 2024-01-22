import React from 'react'
import { Link, Box } from '@mui/material'
import cssStyle from '../css/styles.module.css'

export default function HeaderMenuTabs({ pages, handleSelected }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, paddingRight: '5vmin' }}>
            {
                pages.map((page, index) => (
                    <Link className={cssStyle.link_text} color='#333440' href={page.link} style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2vw' }}>{page.label}</Link>
                ))
            }
        </Box>
    )
}