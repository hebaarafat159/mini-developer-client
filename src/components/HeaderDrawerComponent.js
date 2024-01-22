import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import cssStyle from '../css/styles.module.css'

export default function HeaderDrawerComponent({ pages, handleSelected }) {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton onClick={() => {
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
            <IconButton className={cssStyle.menuIcon} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}