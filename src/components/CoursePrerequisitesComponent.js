import React from 'react'
import { Typography } from '@mui/material'

export default function CoursePrerequisitesComponent({ prerequisite_courses }) {
    return (

        (prerequisite_courses && prerequisite_courses.length > 0) ?
            <>
                <Typography component="p" variant='p' style={{ color: '#ed7d45' }}> Prerequisite Courses  </Typography>
                <ul>
                    {prerequisite_courses.map((prerequisite_courses) =>
                        <Typography component="p" variant='p' style={{ color: '#333440' }}> * {prerequisite_courses} </Typography>

                        //  <li component="h3" variant='h4' style={{ color: '#333440' }}> {prerequisite_courses} </li>
                    )}
                </ul>
            </>
            : null
    )
}