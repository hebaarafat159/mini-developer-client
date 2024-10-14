import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CourseListComponent from '../components/CourseListItemComponent'
import SEOComponent from '../components/SEOComponent'

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
        <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
            <SEOComponent
                seoData={{
                    slug: "our-courses",
                    title: "Our Courses | Mini Developer",
                    description: "Welcome to our coding courses at Mini Developer! Our courses are designed to provide children aged 7 and up, as well as teens, with a fun and engaging way to learn coding and programming. Our experienced tutors are passionate about coding and technology, and they are dedicated to helping children develop their skills."
                }} />
            {courses ? courses.map((course, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <CourseListComponent course={course} key={course._id} />
                </Grid>
            )) : null}
        </Grid>
    )
}