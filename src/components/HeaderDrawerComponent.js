import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderDrawerComponent({ pages, handleSelected }) {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{
                    width: '30%',
                    padding: '20px',
                    variant: 'h6',
                    fontWeight: 'bold',
                    color: '#4F8DB9'
                }}>
                    {
                        pages.map((page, index) => (
                            <ListItemButton
                                variant="h6"
                                className={`link_text ${page.isSelected ? 'selected' : ''}`}
                                style={{ textDecoration: 'none', fontWeight: 'bold', padding: '2vmin', fontStyle: 'italic' }}
                                onClick={() => {
                                    setOpenDrawer(false)
                                    handleSelected(page)
                                }} key={index} component={Link} to={page.link}>
                                <ListItemIcon>
                                    <ListItemText >{page.label}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton className={'menuIcon'} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}