import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid } from '@mui/material'
import CourseListComponent from '../components/CourseListItemComponent'
import SEOComponent from '../components/SEOComponent.js'

export default function Courses() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses`)
            .then(response => response.json())
            .then(result => {
                setCourses(result.body);
            })
    }, []);
    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', background: 'white', padding: '3vw' }} className='screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "our-courses",
                    seo_title: "Our Courses | Mini Developer",
                    seo_description: "Welcome to our coding courses at Mini Developer! Our courses are designed to provide children and teens aged 6 and above with a fun and engaging way to learn coding and programming. We offer a variety of courses with different learning levels taught by experienced instructors.",
                    meta_description: "Welcome to our coding courses at Mini Developer! Our courses are designed to provide children and teens aged 6 and above with a fun and engaging way to learn coding and programming. We offer a variety of courses with different learning levels taught by experienced instructors.",
                    meta_keywords: "coding classes for kids, coding classes for children, coding classes for teens, coding classes Ealing, programming classes for kids, programming classes for children, programming classes for teens, programming classes Ealing, coding school London, coding school UK, coding school Ealing, online coding classes, coding courses for kids, coding courses for children, coding courses for teens, coding courses in Ealing"
                }} />
            <Typography component="h2" variant='h4' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                Mini Developer Coding Courses
            </Typography>

            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} className='screen'>

                {courses ? courses.map((course, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CourseListComponent course={course} key={course._id} index={index}/>
                    </Grid>
                )) : null}
            </Grid>
        </Stack >

    )
}