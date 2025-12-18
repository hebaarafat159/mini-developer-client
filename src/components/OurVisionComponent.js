import React from 'react'
import { Typography, Stack, Grid} from '@mui/material'
import ExploreButtonComponent from './ExploreButtonComponent'
import SEOComponent from './SEOComponent.js'
export default function OurVisionComponent() {

    // set page title
    return (
        <Stack direction="column" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-evenly', background: 'white', padding: '3vw' }} className='screen'>

            <SEOComponent
                seoData={{
                    seo_slug: "/about-us",
                    seo_title: "Our Vision | Mini Developer",
                    seo_description: "At Mini Developer, we are a team of passionate software developer parents who are on a mission to teach young children about the exciting world of coding and technology.",
                    meta_description: "At Mini Developer, we are a team of passionate software developer parents who are on a mission to teach young children about the exciting world of coding and technology.",
                    meta_keywords: "coding for kids, coding classes, coding clubs, coding camps, programming for kids, coding education"
                }} />
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', padding: '3vw' }} >
                        <Typography component="h1" variant='h2' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                            Our Vision
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'left' }}>
                            <span className='miniDeveloperText'>Mini Developer</span> was founded by a group of experienced software developers and at the same time loving parents. We aspire to pass on our passion and knowledge of coding and programming to younger ones.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'left' }}>
                            At<span className='miniDeveloperText'> Mini Developer </span> we believe that a Fun and Interactive environment is the best way to help children learn and grow.
                            Not only do we target the Early learning of coding, but we also strive to help children evolve their soft skills.
                            We will assist them to be more creative and collaborative in addition to becoming better problem solvers and logical thinkers.
                        </Typography>

                        <Typography component="p" variant='p' style={{ textAlign: 'left', color: '#333440' }}>
                            <span style={{ fontWeight: 'bold' }}>Our goal</span> is to inspire the next generation of developers and help children develop valuable skills that will prepare them for the future.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'left' }}>
                            We offer both in-person and online coding classes for ages 6 and above. Whether your child is a complete beginner or already has some coding experience, we have a course that will suit their needs.
                            We are proud to be a part of the London, UK community, and we are committed to providing high-quality coding education to children across the region.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'left' }}>
                            We hope to aid our young innovators to be able to thrive in a future of digital technology.
                        </Typography>

                        <Typography component="p" variant='p' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                            Join us on this exciting journey and give your child the gift of coding today!
                        </Typography>

                        <ExploreButtonComponent />

                    </Stack>

                </Grid>
            </Grid>
 
        </Stack>

    )
}