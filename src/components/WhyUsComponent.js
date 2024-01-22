import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import FreeTrialButton from './FreeTrialButton'
import cssStyle from '../css/styles.module.css'

export default function WhyUsComponent() {
    return (
        <Card className={cssStyle.page}>
            <Stack spacing={1} className={cssStyle.page_content} >
                <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#ed7d45' }} className='aboutTitle'> Why Choose Mini Developer? </Typography>
                <Stack spacing={1} className={cssStyle.page_content} >
                    <ul>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                Sessions are run by qualified experienced <span style={{ fontWeight: 'bold' }}> Software Developers </span>.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                All tutors are<span style={{ fontWeight: 'bold' }}> DBS </span>checked.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                All our staff is trained for children<span style={{ fontWeight: 'bold' }}> safeguarding</span>.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                Our interactive program enables children to learn<span style={{ fontWeight: 'bold' }}>  coding with fun</span>.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                Our students gain greater confidence in technology and coding.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                We provide <span style={{ fontWeight: 'bold' }}>in-person</span> lessons and online lessons to suit all needs.
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                                Accomplishment <span style={{ fontWeight: 'bold' }}>Certificates presented</span>.
                            </Typography>
                        </li>
                    </ul>
                </Stack>
                <FreeTrialButton />
            </Stack>
        </Card>
    )
}