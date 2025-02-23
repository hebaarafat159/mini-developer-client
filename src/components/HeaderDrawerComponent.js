import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText, Collapse, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import '../App.css'

export default function HeaderDrawerComponent({ pages, handleSelected }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    // Track the expanded state of nested items by key/index.
    const [openNested, setOpenNested] = useState({});

    const toggleNested = (key) => {
        setOpenNested((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Common styling for list items
    const listItemSx = {
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '2vmin',
        fontStyle: 'italic',
    };

    // Render a list item. If page.subLinks exists, render a collapsible nested list.
    const renderListItem = (page, key) => {
        if (page.subLinks && page.subLinks.length > 0) {
            return (
                <React.Fragment key={key}>
                    <ListItemButton
                        sx={listItemSx}
                        onClick={() => toggleNested(key)}
                    >
                        <ListItemText primary={page.label} secondary={page.subtitle} />
                        {/* drop-down list ison view */}
                        {openNested[key] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openNested[key]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {page.subLinks.map((subPage, subIndex) => (
                                <ListItemButton
                                    key={`${key}-${subIndex}`}
                                    sx={{ ...listItemSx, pl: 4 }} // increased left padding for nested items
                                    component={Link}
                                    href={subPage.link}
                                    onClick={() => {
                                        setOpenDrawer(false);
                                        handleSelected(subPage);
                                    }}
                                >
                                    <ListItemText primary={subPage.label} secondary={subPage.subtitle} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </React.Fragment>
            );
        } else {
            return (
                <ListItemButton
                    key={key}
                    sx={listItemSx}
                    component={Link}
                    href={page.link}
                    onClick={() => {
                        setOpenDrawer(false);
                        handleSelected(page);
                    }}
                >
                    <ListItemText primary={page.label} secondary={page.subtitle} />
                </ListItemButton>
            );
        }
    };

    return (
        <>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}>

                <List className={'drawer'}>
                    {pages.map((page, index) => renderListItem(page, index))}
                </List>

            </Drawer>
            <IconButton className="menuIcon" onClick={() => setOpenDrawer((prev) => !prev)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
