import React from 'react'
import { Stack, Typography } from '@mui/material'
import course_details_content_img from '../assets/course_details_content_img.png'

export default function CourseSkillsComponent({ course_skills }) {
    return (

        (course_skills && course_skills.length > 0) ?
            <>
                <Typography component="h2" variant='h5' style={{ color: '#ed7d45' }}>This course boosts paramount skills: </Typography>
                <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'space-evenly' }, my: 1 }}>
                    <ul>
                        {course_skills.map((skill) =>
                            <Typography component="h6" variant='h6' style={{ color: '#333440' }}> * {skill} </Typography>
                        )}
                    </ul>
                    <img src={course_details_content_img} loading="lazy" alt="" width={'150vw'} />
                </Stack>
            </> : null
    )
}