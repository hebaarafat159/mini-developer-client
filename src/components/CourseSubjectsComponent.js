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
                            <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'start', padding: '1vmin' } }}>
                                - <img src={subject.icon} loading="lazy" alt="" width={'30vm'} />
                                <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center' } }}>
                                    <Typography component="p" variant='p' style={{ color: '#333440', paddingLeft: '0.5vmin' }}> {subject.text} </Typography>
                                </Stack>
                            </Stack>
                        )}
                    </ul>
                </Stack>
            </> : null
    )
}