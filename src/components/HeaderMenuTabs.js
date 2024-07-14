import React, { useState } from 'react'
import { Link, Box, Menu, MenuItem, Typography } from '@mui/material'

export default function HeaderMenuTabs({ pages, handleSelected }) {

    const showMaxMenuIndex = 2
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
                pages.map((page, index) => (
                    (index < showMaxMenuIndex) ?
                        <Link key={page.position}
                            variant="h6"
                            className={`link_text ${page.isSelected ? 'selected' : ''}`}
                            href={page.link}
                            style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                            onClick={() => {
                                handleSelected(page)
                            }}>
                            {page.label}
                        </Link> : null))
            }

            {/* add more header menu item to sub menu */}
            <>
                <Typography
                    variant="h6"
                    className={`link_text`}
                    style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                    onClick={handleClick}>
                    More
                </Typography>
                <Menu
                    id={`menu`}
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>

                    {pages.map((page, index) => (
                        (index >= showMaxMenuIndex) ?
                            <MenuItem href={page.link}>
                                <Link key={page.position}
                                    variant="h6"
                                    className={`link_text ${page.isSelected ? 'selected' : ''}`}
                                    href={page.link}
                                    style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                                    onClick={() => {
                                        handleSelected(page)
                                    }}>
                                    {page.label}
                                </Link>
                            </MenuItem> : null
                    ))}
                </Menu>
            </>

        </Box>
    )
}