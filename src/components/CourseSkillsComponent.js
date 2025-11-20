import React from 'react'
import { Stack, Typography } from '@mui/material'
// import course_details_content_img from '../assets/course_details_content_img.png'

export default function CourseSkillsComponent({ course_skills }) {
    return (

        (course_skills && course_skills.length > 0) ?
            <>
                <Typography component="h6" variant='h6' style={{ color: '#ed7d45' }}>This course boosts paramount skills: </Typography>
                <Stack sx={{ display: { xs: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' } }}>
                    {course_skills.map((skill) =>
                        <Typography component="h6" variant='h6' style={{ padding: '.5vmin 4vmin' }}> {skill}  </Typography>
                    )}
                </Stack>
            </> : null
    )
}