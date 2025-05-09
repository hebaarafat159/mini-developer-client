import React from 'react'
import { Typography, Grid, Stack } from '@mui/material'
// eslint-disable-next-line 
import CoursePrerequisitesComponent from './CoursePrerequisitesComponent.js'
// eslint-disable-next-line 
import CourseSkillsComponent from './CourseSkillsComponent.js'
import CourseSubjectsComponent from './CourseSubjectsComponent.js'

export default function CourseLevelsComponent({ levels }) {
    return (
        <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>
            <Typography component="h6" variant='h6' style={{ color: '#ed7d45' }}>Course Levels: </Typography>

            <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                {(levels && levels.length > 0) ? levels.map((level, index) => (

                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <div style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            padding: '2vmin',
                            margin: '2vmin',
                            border: '#ed7d45 .2vmin solid',
                            borderRadius: '1vmin'
                        }}>
                            <Typography component="h6" variant='h6' style={{ padding: '1vmin' }}>{level.title}</Typography>
                            <Typography component="p" variant='p' style={{ padding: '1vmin' }}>Duration: {level.course_duration}  weeks</Typography>

                            {/* subjects */}
                            <CourseSubjectsComponent course_subjects={level.course_subjects} />
                        </div>
                    </Grid>
                )) : null}
            </Grid>
        </Stack>
    )
}