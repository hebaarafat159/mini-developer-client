import React, { useState, useEffect } from 'react'
import { Card, Stack, Typography } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton'
import cssStyle from '../css/styles.module.css'

export default function CourseDetails() {

  const [courseObject, setCourseObject] = useState({})

  useEffect(() => {
    fetch(`http://localhost:4000/courses/65ae00d254af1ac02b422ad3`) //${this.props.id}`)
      .then(response => response.json())
      .then(result => {
        setCourseObject(result.body);
        console.log(`Course Object : ${result.body}`)
      })
  }, []);

  return (
    <Card className={cssStyle.page}>
      <Stack direction="column" spacing={2}>
        <img src={courseObject.cover_image} loading="lazy" alt="" width={'500vw'}/>

        <Typography style={{ fontWeight: 'bold', fontSize: '3vw', color: '#ed7d45' }}> {courseObject.title} </Typography>
        <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#333440', borderBottom: '#333440 3px solid' }}> Course Details </Typography>

        
        <FreeTrialButton />
      </Stack>
    </Card>
  )
}