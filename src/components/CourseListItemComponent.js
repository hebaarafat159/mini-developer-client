import React from 'react'
import cssStyle from '../css/styles.module.css'
import { Card, Stack, Typography, Button } from '@mui/material'

export default function CourseListComponent({ course }) {
  return (
    <Card className={cssStyle.course_card}>
      <div
        className={cssStyle.course_card_image}
        style={{ backgroundImage: `url("${course.cover_image}")` }}>

        <Button variant="contained" style={{
          borderRadius: 10,
          background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
          fontSize: "2.5vmin"
        }} LinkComponent={'a'} href={'/coursedetails'}>View Details</Button>
      </div>

      <Stack className={cssStyle.course_card_details}>
        <Typography style={{ fontWeight: 'bolder', fontSize: '1.2vw', color: '#333440' }}>{course.title}</Typography>
        <Typography style={{ fontSize: '1vw', color: '#333440' }}> <span className={cssStyle.course_card_bold_text}>Age:</span> {course.age} </Typography>
        <Typography style={{ fontSize: '1vw', color: '#333440' }}> <span className={cssStyle.course_card_bold_text}>Language:</span> {course.language}</Typography>
      </Stack>
    </Card >
  )
}