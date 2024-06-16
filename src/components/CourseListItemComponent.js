import React from 'react'
import cssStyle from '../css/styles.module.css'
import { Card, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function CourseListComponent({ course }) {
  return (
    <Card className={cssStyle.course_card}>
      <div
        className={cssStyle.course_card_image}
        style={{ backgroundImage: `url("${course.cover_image}")` }}>
        <Link to={{ pathname: `/courses/${course._id}` }}>
          <Button variant="contained" style={{
            borderRadius: 10,
            background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
            fontSize: "2.5vmin",
            marginBottom:0
          }}>
            View Details
          </Button>
        </Link>
      </div>

      <Stack className={cssStyle.course_card_details}>
        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight:'bolder' }}>{course.title}</Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={cssStyle.course_card_bold_text}>Age:</span> {course.age} </Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={cssStyle.course_card_bold_text}>Language:</span> {course.language}</Typography>
      </Stack>
    </Card >
  )
}