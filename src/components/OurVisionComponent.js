import React from 'react'
import { Card, Typography, Stack } from '@mui/material'
import ExploreButtonComponent from './ExploreButtonComponent'
import cssStyle from '../css/styles.module.css'

export default function OurVisionComponent() {
    return (
        <Stack spacing={1} className={cssStyle.page} >
            <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#ed7d45' }} className='aboutTitle'> Our Vision </Typography>
            <Stack spacing={1} className={cssStyle.page_content} >
                <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                    <span className='miniDeveloperText'>Mini Developer</span> was founded by a group of experienced software developers and at the same time loving parents. We aspire to pass on our passion and knowledge of coding and programming to younger ones.
                </Typography>

                <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                    At<span className='miniDeveloperText'> Mini Developer </span>we believe that a Fun and Interactive environment is the best way to help children learn and grow.
                    Not only do we target the Early learning of coding, but we also strive to help children evolve their soft skills.
                    We will assist them to be more creative and collaborative in addition to becoming better problem solvers and logical thinkers.
                </Typography>

                <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                    <span style={{ fontWeight: 'bold' }}>Our goal</span> is to inspire the next generation of developers and help children develop valuable skills that will prepare them for the future.
                </Typography>

                <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                    We offer both in-person and online coding classes for ages 7 and up. Whether your child is a complete beginner or already has some coding experience, we have a program that will suit their needs.
                    We are proud to be a part of the London, UK community, and we are committed to providing high-quality coding education to children across the region.
                </Typography>

                <Typography style={{ fontWeight: 'normal', fontSize: '1.2vw', color: '#333440', padding: '2vmin 0' }}>
                    We hope to aid our young innovators to be able to thrive in a future of digital technology.
                </Typography>

                <Typography style={{ fontWeight: 'bold', fontSize: '1.2vw', color: '#333440', padding: '1vmin auto', justifyContent: 'center' }}>
                    Join us on this exciting journey and give your child the gift of coding today!
                </Typography>
            </Stack>
            <ExploreButtonComponent />
        </Stack>
    )
}