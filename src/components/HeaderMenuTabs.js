import React, { useState } from 'react'
import { Link, Box, Menu, MenuItem, Typography } from '@mui/material'

export default function HeaderMenuTabs({ pages, handleSelected }) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, paddingRight: '5vmin' }}>
            {
                pages.map((page, index) =>
                (
                    (page.link !== null && page.link !== undefined) ?
                        <Link
                            key={index}
                            variant="h6"
                            className={`link_text ${page.isSelected ? 'selected' : ''}`}
                            href={page.link}
                            style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                            onClick={() => {
                                handleSelected(page)
                            }}>
                            {page.label}
                        </Link>
                        :
                        ((page.subLinks !== null && page.subLinks !== undefined && page.subLinks.length > 0) ?
                            <>
                                <Typography
                                    variant="h6"
                                    className={`link_text ${page.isSelected ? 'selected' : ''}`}
                                    style={{ color: '#1876d2', textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                                    onClick={handleClick}>
                                    {page.label}
                                </Typography>
                                <Menu
                                    id={`menu`}
                                    anchorEl={anchorEl}
                                    getContentAnchorEl={null}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    <MenuItem href={page.link}>
                                        {
                                            page.subLinks.map((page, index) =>
                                            (

                                                <Link key={index}
                                                    variant="h6"
                                                    className={`link_text ${page.isSelected ? 'selected' : ''}`}
                                                    href={page.link}
                                                    style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                                                    onClick={() => {
                                                        handleSelected(page)
                                                    }}>
                                                    {page.label}
                                                </Link>

                                            ))
                                        }
                                    </MenuItem>
                                </Menu>
                            </>
                            : null)
                ))
            }
        </Box>
    )
}