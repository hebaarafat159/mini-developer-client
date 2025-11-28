import React from 'react'
import { Card, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import scratch_card from '../assets/scratch_card.png'
import web_card from '../assets/web_card.jpg'
import apps_card from '../assets/apps_card.jpg'
import python_card from '../assets/python_card.jpg'
import java_card from '../assets/java_card.jpg'

export default function CourseListComponent({ course }) {
  const path = `/our-courses/${course.seo_slug}`
  const card_images_array = [   
      scratch_card,
      web_card,
      apps_card,
      python_card,
      java_card
  ]
  return (
    <Card className={'course_card'} component={'a'} href={path} style={{ textDecoration: 'none' }}>
      <div
        className={'course_card_image'}
        style={{ backgroundImage: `url("${card_images_array[course.course_index]}")` }}>
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
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Age:</span> {course.age}+ </Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Language:</span> {course.language}</Typography>
      </Stack>
    </Card >
  )
}