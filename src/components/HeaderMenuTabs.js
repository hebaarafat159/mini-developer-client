import React, { useState } from 'react';
import { Link, Box, Menu, MenuItem } from '@mui/material';

export default function HeaderMenuTabs({ pages, handleSelected }) {
    // State to track the currently open submenu.
    const [menuAnchor, setMenuAnchor] = useState({ anchorEl: null, index: null });

    // Opens the submenu for the given page.
    const handleSubMenuClick = (event, index) => {
        setMenuAnchor({ anchorEl: event.currentTarget, index });
    };

    // Closes any open submenu.
    const handleMenuClose = () => {
        setMenuAnchor({ anchorEl: null, index: null });
    };

    // Handles link selection (for both main links and submenu items).
    const handleLinkClick = (page) => {
        handleSelected(page);
        handleMenuClose();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1.5,
                paddingRight: '5vmin',
            }}
        >
            {pages.map((page, index) => {
                // If the page has a direct link, render it as a Link.
                if (page.link) {
                    return (
                        <Link
                            key={index}
                            href={page.link}
                            className="navbar-item"
                            sx={{
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                padding: '2vmin',
                                fontStyle: 'italic',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleSelected(page)}
                        >
                            {page.label}
                        </Link>
                    );
                }
                // If the page contains subLinks, render a clickable element with a submenu.
                else if (page.subLinks && page.subLinks.length > 0) {
                    return (
                        <React.Fragment key={index}>
                            <Link
                                onClick={(event) => handleSubMenuClick(event, index)}
                                className="navbar-item"
                                sx={{
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    padding: '2vmin',
                                    fontStyle: 'italic',
                                    cursor: 'pointer',
                                }}
                            >
                                {page.label}
                            </Link>
                            <Menu
                                anchorEl={menuAnchor.anchorEl}
                                open={menuAnchor.index === index && Boolean(menuAnchor.anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {page.subLinks.map((subLink, subIndex) => (
                                    <MenuItem
                                        key={subIndex}
                                        LinkComponent={subLink.link}
                                        onClick={() => handleLinkClick(subLink)}
                                        sx={{
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            padding: '2vmin',
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        <Link
                                            key={index}
                                            href={subLink.link}
                                            className="navbar-item"
                                            sx={{
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                padding: '2vmin',
                                                fontStyle: 'italic',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleSelected(subLink)}
                                        >
                                            {subLink.label}
                                        </Link>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    );
                }
                return null;
            })}
        </Box>
    );
}
