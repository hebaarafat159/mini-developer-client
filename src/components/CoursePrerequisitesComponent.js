import React from 'react'
import { Typography, Stack, Link } from '@mui/material'

export default function CoursePrerequisitesComponent({ prerequisite_courses }) {
    return (

        (prerequisite_courses && prerequisite_courses.length > 0) ?
            <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>
                <Typography component="h6" variant='h6' style={{ color: '#ed7d45' }}> Prerequisite Courses  </Typography>
                {prerequisite_courses.map((course, index) => (
                    // <Typography component="p" variant='p' style={{ color: '#333440' }}> * {course} </Typography>
                    <Link
                        key={index}
                        variant="h6"
                        href={`/our-courses/${course.seo_slug}`}
                        style={{ padding: '1vmin 2vmin', fontStyle: 'italic', color: '#4F8DB9' }}
                    >
                        {course.title}
                    </Link>
                ))}
            </Stack>
            : null
    )
}