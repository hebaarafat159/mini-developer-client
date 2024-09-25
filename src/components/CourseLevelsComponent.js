import React from 'react'
import { Typography, Grid, Stack } from '@mui/material'
import CoursePrerequisitesComponent from './CoursePrerequisitesComponent.js'
import CourseSkillsComponent from './CourseSkillsComponent.js'
import CourseSubjectsComponent from './CourseSubjectsComponent.js'

export default function CourseLevelsComponent({ levels }) {
    return (
        <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>
            <Typography component="h6" variant='h6' style={{ color: '#ed7d45' }}>Course Levels: </Typography>

            <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                {(levels && levels.length > 0) ? levels.map((level, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index} style={{ border: '#ed7d45 .2vmin solid', borderRadius: '1vmin' }}>
                        <Typography component="p" variant='p' style={{ padding: '1vmin', fontWeight: 'bold' }}>{level.title}</Typography>

                        {/* Prerequisite Courses */}
                        <CoursePrerequisitesComponent prerequisite_courses={level.prerequisite_courses} />

                        {/* subjects */}
                        <CourseSubjectsComponent course_subjects={level.course_subjects} />

                        {/* course skills */}
                        <CourseSkillsComponent course_skills={level.course_skills} />

                    </Grid>
                )) : null}
            </Grid>
        </Stack>
    )
}