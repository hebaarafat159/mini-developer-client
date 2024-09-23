import React from 'react'
import { Stack, Typography } from '@mui/material'

export default function CourseSubjectsComponent({ course_subjects }) {
    return (
        (course_subjects && course_subjects.length > 0) ?
            <>
                <Typography component="p" variant='p' style={{ color: '#4f8db9', padding: '1vmin' }}>In this course you will learn: </Typography>
                <Stack direction="column" sx={{ display: { xs: 'flex', justifyContent: 'space-evenly' } }}>
                    <ul>
                        {course_subjects.map((subject) =>
                            <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center' } }}>
                                - <img src={subject.icon} loading="lazy" alt="" width={'30vm'} />
                                <Typography component="p" variant='p' style={{ color: '#333440' }}> {subject.text} </Typography>
                            </Stack>
                        )}
                    </ul>
                </Stack>
            </> : null
    )
}