import React from 'react'
import { Link, Box } from '@mui/material'
// import cssStyle from '../css/styles.module.css'
import '../App.css'

export default function HeaderMenuTabs({ pages, handleSelected }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, paddingRight: '5vmin' }}>
            {
                pages.map((page, index) => (
                    <Link key={page.position}
                        // className={cssStyle.link_text}
                        variant="h6"
                        className={`link_text ${page.isSelected ? 'selected' : ''}`}
                        // variant='p'
                        // color={(page.isSelected) ? '#ed7d45' : '#333440'}
                        // color='#333440'
                        href={page.link}
                        style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                        onClick={() => {
                            handleSelected(page)
                        }}>
                        {page.label}
                    </Link>
                ))
            }
        </Box>
    )
}