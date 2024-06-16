import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CourseListComponent from '../components/CourseListItemComponent'
// import cssStyle from '../css/styles.module.css'

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
            {courses ? courses.map((course, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <CourseListComponent course={course} key={course._id} />
                </Grid>
            )) : null}
        </Grid>


    )
}