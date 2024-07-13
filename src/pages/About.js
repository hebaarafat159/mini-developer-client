import React, { useState } from 'react'
import { Card, Tab, Tabs } from '@mui/material'
import OurVisionComponent from '../components/OurVisionComponent';
import WhyUsComponent from '../components/WhyUsComponent';
import cssStyle from '../css/styles.module.css'

export default function About() {

    // set page title
    document.title = ' About Us | Mini Developer';

    const [value, setValue] = useState(0);
    const tabs = ["Our Vision", "Why Us"]
    return (
        <>
            <Tabs
                style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin', justifyContent: 'space-evenly', marginTop: '10vmin' }}
                sx={{
                    marginLeft: 'auto',
                    fontStyle: { fontSize: '1.5vmin', fontWeight: 'bold' }
                }}
                value={value}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#ed7d45",
                        height: 3,
                        color: "#ed7d45",
                    }
                }}
                onChange={(e, value) => {
                    setValue(value)
                }} indicatorColor='secondary'>
                {
                    tabs.map((tab, index) => (
                        <Tab key={index} label={tab} />
                    ))
                }
            </Tabs>
            <Card className={cssStyle.page}>
                {value === 0 && <OurVisionComponent />}
                {value === 1 && <WhyUsComponent />}
            </Card>
        </>
    )
}