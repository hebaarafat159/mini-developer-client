import React from 'react'
import { Typography, Stack } from '@mui/material'
import ExploreButtonComponent from './ExploreButtonComponent'
import SEOComponent from './SEOComponent.js'
export default function OurVisionComponet() {

    // set page title
    return (
        <Stack direction="column" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', background: 'white', padding: '3vw' }} >

            <SEOComponent
                seoData={{
                    seo_slug: "/about/about-us",
                    seo_title: "Our Vision | Mini Developer",
                    seo_description: "At Mini Developer, we are a team of passionate software engineer parents who are on a mission to teach young children about the exciting world of coding and technology. We understand the importance of early exposure to coding skills in today's digital age, and we are committed to helping children develop their skills."
                }} />
            <Typography component="h4" variant='h6' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bold' }}>
                Our Vision
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440' }}>
                <span className='miniDeveloperText'>Mini Developer</span> was founded by a group of experienced software developers and at the same time loving parents. We aspire to pass on our passion and knowledge of coding and programming to younger ones.
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440' }}>
                <span style={{ fontWeight: 'bold' }}> Software Developers </span> At<span className='miniDeveloperText'> Mini Developer </span>we believe that a Fun and Interactive environment is the best way to help children learn and grow.
                Not only do we target the Early learning of coding, but we also strive to help children evolve their soft skills.
                We will assist them to be more creative and collaborative in addition to becoming better problem solvers and logical thinkers.
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440' }}>
                <span style={{ fontWeight: 'bold' }}>Our goal</span> is to inspire the next generation of developers and help children develop valuable skills that will prepare them for the future.
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440' }}>
                We offer both in-person and online coding classes for ages 7 and up. Whether your child is a complete beginner or already has some coding experience, we have a program that will suit their needs.
                We are proud to be a part of the London, UK community, and we are committed to providing high-quality coding education to children across the region.
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440' }}>
                We hope to aid our young innovators to be able to thrive in a future of digital technology.
            </Typography>

            <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'center' }}>
                Join us on this exciting journey and give your child the gift of coding today!
            </Typography>

            <ExploreButtonComponent />

        </Stack>

    )
}