import React, { useState, useEffect } from 'react'
import { Card, Stack, Typography } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton'
import cssStyle from '../css/styles.module.css'
import course_details_language_icon from '../assets/course_details_language_icon.png'
import course_details_course_duration_icon from '../assets/course_details_course_duration_icon.png'
import course_details_price_icon from '../assets/course_details_price_icon.png'
import course_details_session_duration_icon from '../assets/course_details_session_duration_icon.png'
import course_details_age_icon from '../assets/course_details_age_icon.png'
import course_details_type from '../assets/course_details_type.png'
import course_details_content_img from '../assets/course_details_content_img.png'
import { useParams } from 'react-router-dom'

export default function CourseDetails(props) {
  const { id } = useParams();
  const [courseObject, setCourseObject] = useState({})

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${id}}`)
      .then(response => response.json())
      .then(result => {
        setCourseObject(result.body);
        console.log(`Course Object : ${result.body}`)
      })
  }, [id]);

  return (
    <Card className={cssStyle.page}>
      <Stack direction="column" spacing={2}>
        <img src={courseObject.cover_image} loading="lazy" alt="" width={'500vw'} />

        <Typography style={{ fontWeight: 'bold', fontSize: '3vw', color: '#ed7d45' }}> {courseObject.title} </Typography>
        <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#333440', borderBottom: '#333440 3px solid' }}> Course Details </Typography>

        <Stack className={cssStyle.course_details_content}>
          {/* Language */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_language_icon} className={cssStyle.icon} loading="lazy" alt="" />
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {courseObject.language} </Typography>
          </Stack>
          {/* course duration  */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_course_duration_icon} className={cssStyle.icon} loading="lazy" alt="" />
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {courseObject.course_duration} weeks </Typography>
          </Stack>

          {/* session duration */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_session_duration_icon} className={cssStyle.icon} loading="lazy" alt="" />
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {courseObject.session_duration} hr/week (Off during school breaks) </Typography>
          </Stack>

          {/* Age */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_age_icon} className={cssStyle.icon} loading="lazy" alt="" />
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> Age: {courseObject.age} </Typography>
          </Stack>

          {/* type */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_type} className={cssStyle.icon} loading="lazy" alt="" />
            {/* <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {courseObject.type && courseObject.type.map((ty,index) => `${ty} or `)} </Typography> */}
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> In-Person Or Online </Typography>
          </Stack>

          {/* price */}
          <Stack direction="row" spacing={1} className={cssStyle.course_details_content_item}>
            <img src={course_details_price_icon} className={cssStyle.icon} loading="lazy" alt="" />
            <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> £{courseObject.price} / hours </Typography>
          </Stack>

        </Stack>

        {/* Prerequisite Courses */}

        {
          (courseObject.prerequisite_courses && courseObject.prerequisite_courses.length > 0) ?

            <>
              <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#ed7d45' }}> Prerequisite Courses  </Typography>
              <ul>
                {courseObject.prerequisite_courses.map((prerequisite_courses) => <li style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {prerequisite_courses} </li>)}
              </ul>
            </>
            : null
        }

        {/* Description */}
        <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#ed7d45' }}> Description </Typography>
        <Typography style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {courseObject.description} </Typography>

        <Stack direction="row">
          <Stack direction="column" spacing={2}>

            {/* course subjects */}
            {
              (courseObject.course_subjects && courseObject.course_subjects.length > 0) ?
                <>
                  <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#ed7d45' }}> In this course you will learn: </Typography>
                  <ul>
                    {courseObject.course_subjects.map((subject) => <li style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> {subject} </li>)}
                  </ul>
                </> : null
            }

            {/* course skilld */}
            {
              (courseObject.course_skills && courseObject.course_skills.length > 0) ?
                <>
                  <Typography style={{ fontWeight: 'bold', fontSize: '1.5vw', color: '#ed7d45' }}> This course boosts paramount skills: </Typography>
                  <ul>
                    {courseObject.course_skills.map((skill) => <li style={{ fontWeight: 'normal', fontSize: '1.5vw', color: '#333440' }}> skill </li>)}
                  </ul>
                </> : null
            }
          </Stack>
          <img src={course_details_content_img} className={cssStyle.contentImage} loading="lazy" alt="" />
        </Stack>
        <FreeTrialButton course={courseObject} />
      </Stack>
    </Card>
  )
}