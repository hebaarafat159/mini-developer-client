import React from 'react'
import { Card, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function CourseListComponent({ course }) {
  const path = `/our-courses/${course.seo_slug}`
  return (
    <Card className={'course_card'} component={'a'} href={path} style={{ textDecoration: 'none' }}>
      <div
        className={'course_card_image'}
        style={{ backgroundImage: `url("${course.cover_image}")` }}>
        <Link to={{ pathname: path }}>
          <Button variant="contained" className='blue_btn'
            style={{
              borderRadius: 5,
              // background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
              fontSize: "2.5vmin",
              marginBottom: 0
            }}>
            View Details
          </Button>
        </Link>
      </div>

      <Stack className={'course_card_details'}>
        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bolder' }}>{course.title}</Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Age:</span> {course.age} </Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Language:</span> {course.language}</Typography>
      </Stack>
    </Card >
  )
}