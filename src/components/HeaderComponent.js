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
import TermDates from '../pages/TermDates'

export default function HeaderComponent() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [pages, setPages] = useState([
        {
            position: 0,
            label: 'Home',
            link: '/',
            component: <Home />,
            isSelected: true
        },
        {
            position: 1,
            label: 'Our Vision',
            link: '/about/ourvision',
            component: <OurVisionComponent />,
            isSelected: false
        },
        {
            position: 2,
            label: 'Why Us',
            link: '/about/whyus',
            component: <WhyUsComponent />,
            isSelected: false
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
            component: <Courses />,
            isSelected: false
        },
        {
            position: 4,
            label: 'Contact Us',
            link: '/contactus',
            component: <ContactUs />
        },
        {
            position: 5,
            label: 'Term Dates',
            link: '/termdates',
            component: <TermDates />
        }
    ])

    function handleSelected(selectedItem) {
        // alert(`Item selected : ${selectedItem.position}`)
        pages.forEach(page => {
            // alert(`Page selected : ${page.label}`)
            if (page === selectedItem) {
                // alert(selectedItem.label)
                page.isSelected = true
            } else {
                page.isSelected = false
            }
        });
        setPages(pages)
        // pages.forEach(page => {
        //     alert(`Page selected : ${page.label} : ${page.isSelected}`)
        // });
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
                        isMatch ? (<HeaderDrawerComponent pages={pages} handleSelected={handleSelected} sx={{ marginLeft: 'auto' }} />)
                            : (<HeaderMenuTabs pages={pages} handleSelected={handleSelected} />)
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}