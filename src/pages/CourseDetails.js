import React, { useState, useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import FreeTrialButton from '../components/FreeTrialButton'
import course_details_language_icon from '../assets/course_details_language_icon.png'
import course_details_course_duration_icon from '../assets/course_details_course_duration_icon.png'
import course_details_price_icon from '../assets/course_details_price_icon.png'
import course_details_session_duration_icon from '../assets/course_details_session_duration_icon.png'
import course_details_age_icon from '../assets/course_details_age_icon.png'
import course_details_type from '../assets/course_details_type.png'
import { useParams } from 'react-router-dom'
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import CoursePrerequisitesComponent from '../components/CoursePrerequisitesComponent.js'
import CourseLevelsComponent from '../components/CourseLevelsComponent.js'
import CourseSkillsComponent from '../components/CourseSkillsComponent.js'
import CourseSubjectsComponent from '../components/CourseSubjectsComponent.js'
import CourseDetailsComponent from '../components/CourseDetailsComponent.js'

export default function CourseDetails() {

  // set page title
  document.title = ' Course Details | Mini Developer';

  const { id } = useParams();
  const [courseObject, setCourseObject] = useState({})

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${id}`)
      .then(response => response.json())
      .then(result => {
        setCourseObject(result.body);
        console.log(`Course Object : ${result.body}`)
      })
  }, [id]);


  const courseDetailsArray = [
    {
      icon: course_details_language_icon,
      text: ` ${courseObject.language}`
    },
    {
      icon: course_details_course_duration_icon,
      text: ` ${courseObject.course_duration + " weeks"}`
    },
    {
      icon: course_details_session_duration_icon,
      text: ` ${courseObject.session_duration} hr/weeks`
    },
    {
      icon: course_details_age_icon,
      text: ` ${courseObject.age} `
    },
    {
      icon: course_details_type,
      text: ` ${courseObject.type}`
    },
    {
      icon: course_details_price_icon,
      text: ` £ ${courseObject.price} / hours`
    }
  ]

  return (
    <Stack className='recent-blogs d-block'>

      <Stack direction="column" spacing={2} sx={{ display: { xs: 'flex' }, my: 1 }}>

        <img src={courseObject.cover_image} loading="lazy" alt="" height={'550vh'} width={'90%'} />

        {/* course title */}
        <Typography variant='h3' style={{ color: '#ed7d45', textAlign: 'center' }}> {courseObject.title} </Typography>

        {/* course details */}
        <Typography variant='h4' style={{ fontWeight: 'bold', color: '#333440', borderBottom: '#333440 3px solid', textAlign: 'center' }}> Course Details </Typography>

        <Stack spacing={2} sx={{ flexGrow: 1, alignItems: 'center' }} >

          <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }}>
            <CourseDetailsComponent details={courseDetailsArray} />

            {/* Description */}
            <Typography component="h2" variant='h5' style={{ color: '#ed7d45' }}> Description </Typography>
            <Typography component="h6" variant='h6' style={{ color: '#333440' }}> {courseObject.description} </Typography>

            {
              (courseObject.levels && courseObject.levels.length > 0) ?
                <CourseLevelsComponent levels={courseObject.levels} />
                :
                <>
                  {/* Prerequisite Courses */}
                  <CoursePrerequisitesComponent prerequisite_courses={courseObject.prerequisite_courses} />

                  {/* subjects */}
                  <CourseSubjectsComponent course_subjects={courseObject.course_subjects} />

                  {/* course skills */}
                  <CourseSkillsComponent course_skills={courseObject.course_skills} />
                </>
            }

          </Stack>

          <FreeTrialButton course={courseObject} is_blus={true} />

        </Stack>
      </Stack>
    </Stack>
  )
}