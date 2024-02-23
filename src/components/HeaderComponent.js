import React, { useState } from 'react'

import { useMediaQuery, useTheme, Box, Link } from '@mui/material'

import image from '../assets/mini-developer-logo.png'
import cssStyle from '../css/styles.module.css'

import Home from '../pages/Home'
// import About from '../pages/About'
// eslint-disable-next-line
import ContactUs from '../pages/ContactUs'
import Courses from '../pages/Courses'
import HeaderDrawerComponent from './HeaderDrawerComponent'
import HeaderMenuTabs from './HeaderMenuTabs'
import OurVisionComponent from '../components/OurVisionComponent';
import WhyUsComponent from '../components/WhyUsComponent';

export default function HeaderComponent() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const PAGES = [
        {
            position: 0,
            label: 'Home',
            link: '/',
            component: <Home />
        },
        {
            position: 1,
            label: 'Our Vision',
            link: '/about/ourvision',
            component: <OurVisionComponent />
        },
        {
            position: 2,
            label: 'Why Us',
            link: '/about/whyus',
            component: <WhyUsComponent />
        },
        // {
        //     position: 1,
        //     label: 'About',
        //     link: '/about',
        //     component: <About />
        // },
        {
            position: 3,
            label: 'Our Courses',
            link: '/courses',
            component: <Courses />
        },
        // {
        //     position: 4,
        //     label: 'Contact Us',
        //     link: '/contactus',
        //     component: <ContactUs />
        // }
    ]

    // eslint-disable-next-line
    const [selectedTab, setSelectedTab] = useState(0);
    function handleSelected(selectedItem) {
        setSelectedTab(selectedItem)
    }
    return (
        <React.Fragment>
            <Box
                className={cssStyle.Header}>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '5vmin' }}>
                    <img src={image} className={cssStyle.logo} loading="lazy" alt="" component={Link} to={'/'} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '5vmin' }}>
                    {
                        isMatch ? (<HeaderDrawerComponent pages={PAGES} handleSelected={handleSelected} sx={{ marginLeft: 'auto' }} />)
                            : (<HeaderMenuTabs pages={PAGES} handleSelected={handleSelected} />)
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}