// eslint-disable-next-line
import React, { useEffect, useState } from 'react'

import { useMediaQuery, useTheme, Box, Link } from '@mui/material'

import image from '../assets/mini-developer-logo.png'

import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs'
import Courses from '../pages/Courses'
import HeaderDrawerComponent from './HeaderDrawerComponent'
import HeaderMenuTabs from './HeaderMenuTabs'
import OurVisionComponent from '../components/OurVisionComponent';
import WhyUsComponent from '../components/WhyUsComponent';
import TermDates from '../pages/TermDates'
import Testimonials from '../pages/Testimonials'
export default function HeaderComponent() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    // eslint-disable-next-line
    const [selectedTab, setSelectedTab] = useState(1)

    // eslint-disable-next-line
    const [pages, setPages] = useState([
        {
            position: 0,
            label: 'Home',
            link: '/',
            component: <Home />,
            isSelected: false
        },
        {
            position: 1,
            label: 'Our Courses',
            link: '/our-courses',
            component: <Courses />,
            isSelected: false
        },
        {
            position: 2,
            label: 'About',
            isSelected: false,
            subLinks: [
                {
                    position: 1,
                    label: 'Our Vision',
                    link: '/about/about-us',
                    component: <OurVisionComponent />,
                    isSelected: false
                },
                {
                    position: 2,
                    label: 'Why Us?',
                    link: '/about/why-us',
                    component: <WhyUsComponent />,
                    isSelected: false
                }
            ]
            // link: '/about',
            // component: <About />
        },
        {
            position: 3,
            label: 'Contact Us',
            link: '/contact-us',
            component: <ContactUs />
        },
        {
            position: 4,
            label: 'Term Dates',
            link: '/term-dates',
            component: <TermDates />
        },
        {
            position: 5,
            label: 'Testimonials',
            link: '/testimonials',
            component: <Testimonials />
        }
    ])

    // useEffect((selectedItem) => {
    //     pages.forEach(page => {
    //         if (page === selectedItem) {
    //             page.isSelected = true
    //         } else {
    //             page.isSelected = false
    //         }
    //     });
    //     setPages([...pages])
    // }, [selectedTab, pages]);

    function handleSelected(selectedItem) {
        setSelectedTab(selectedItem.position)
    }
    return (
        <React.Fragment>
            <Box
                className={'Header'}>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '5vmin' }}>
                    <Link key={pages[0].position}
                        href={pages[0].link} >
                        <img src={image} className={'App-logo'} loading="lazy" alt="" />
                    </Link>
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