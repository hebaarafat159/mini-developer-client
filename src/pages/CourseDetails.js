import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Divider, Stack, Link } from "@mui/material";
import FreeTrialButton from '../components/FreeTrialButton.js'
import course_details_language_icon from '../assets/course_details_language_icon.png'
import course_details_course_duration_icon from '../assets/course_details_course_duration_icon.png'
import course_details_price_icon from '../assets/course_details_price_icon.png'
import course_details_session_duration_icon from '../assets/course_details_session_duration_icon.png'
import course_details_age_icon from '../assets/course_details_age_icon.png'
import course_details_type from '../assets/course_details_type.png'
import { useParams } from 'react-router-dom'

export default function CourseDetails() {

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
      text: ` ${courseObject.age}+ `
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
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, md: 400 },
          backgroundImage: `url("${courseObject.cover_image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box textAlign="center" py={5}>
        <Typography variant="h4" sx={{ color: "#f26522", fontWeight: 600 }}>
          {courseObject.title}
        </Typography>
        <Typography variant="subtitle1" mt={2} sx={{ fontWeight: 400 }}>
          Course Description
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, mx: "auto", mt: 2 }} />
        <Stack className='recent-blogs d-block screen' >
          {/* course details section Grid */}
          <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
            {courseDetailsArray ? courseDetailsArray.map((detail, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Stack direction="row" sx={{ display: { xs: 'flex', alignItems: 'center', margin: '.2vmin' } }}>
                  <img src={detail.icon} loading="lazy" alt="" width={'30vm'} />
                  <Typography variant="subtitle1" mt={2} sx={{ fontWeight: 400 }} style={{ color: '#333440', padding: '1vw' }}> {detail.text} </Typography>
                </Stack>
              </Grid>
            )) : null}
          </Grid>

          {/* description section */}
          <Typography variant="subtitle" mt={2} style={{ color: '#174feb', textAlign: 'left' }}> Description </Typography>
          <Typography variant="subtitle" mt={2} style={{ color: '#333440', textAlign: 'left' }}> {courseObject.description} </Typography>

          {/* Prerequisite Courses */}
          {(courseObject.prerequisite_courses && courseObject.prerequisite_courses.length > 0) ?
            <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>
              <Typography variant="subtitle" mt={2} style={{ color: '#174feb', textAlign: 'left' }}> Prerequisite Courses  </Typography>
              {courseObject.prerequisite_courses.map((course, index) => (
                // <Typography component="p" variant='p' style={{ color: '#333440' }}> * {course} </Typography>
                <Link
                  key={index}
                  variant="subtitle" mt={2}
                  href={`/our-courses/${course.seo_slug}`}
                  style={{ padding: '1vmin', fontStyle: 'italic', color: '#4F8DB9', textAlign: 'left' }}
                >
                  {course.title}
                </Link>
              ))}
            </Stack>
            : null}

          {/* course skills */}
          {(courseObject.course_skills && courseObject.course_skills.length > 0) ?
            <>
              <Typography variant="subtitle" mt={2} style={{ color: '#174feb', textAlign: 'left' }}>This course boosts paramount skills: </Typography>
              <Stack sx={{ display: { xs: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' } }}>
                {courseObject.course_skills.map((skill) =>
                  <Typography variant="subtitle" mt={2} style={{ padding: '.5vmin 4vmin', color: '#4F8DB9' }}> {skill}  </Typography>
                )}
              </Stack>
            </> : null}

          {
            (courseObject.levels && courseObject.levels.length > 0) ?
              // <CourseLevelsComponent levels={courseObject.levels} />
              <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>
                <Typography variant="subtitle" mt={2} style={{ color: '#174feb', textAlign: 'left' }}>Course Levels: </Typography>

                <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                  {(courseObject.levels && courseObject.levels.length > 0) ? courseObject.levels.map((level, index) => (

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
                        <Typography variant="subtitle" style={{ padding: '1vmin', textAlign: 'left' }}>{level.title}</Typography>
                        <Typography component="p" variant='p' style={{ padding: '1vmin', textAlign: 'left' }}>Duration: {level.course_duration}  weeks</Typography>

                        {/* subjects */}
                        {/* <CourseSubjectsComponent course_subjects={level.course_subjects} /> */}
                        {(level.course_subjects && level.course_subjects.length > 0) ?
                          <>
                            <Typography component="p" variant='p' style={{ color: '#174feb', padding: '1vmin', textAlign: 'left' }}>In this course you will learn: </Typography>
                            <Stack direction="column" sx={{ display: { xs: 'flex', justifyContent: 'space-evenly' } }}>
                              <ul>
                                {level.course_subjects.map((subject) =>
                                  <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'start', padding: '1vmin' } }}>
                                    - <img src={subject.icon} loading="lazy" alt="" width={'30vm'} />
                                    <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center' } }}>
                                      <Typography component="p" variant='p' style={{ color: '#333440', paddingLeft: '0.5vmin', textAlign: 'left' }}> {subject.text} </Typography>
                                    </Stack>
                                  </Stack>
                                )}
                              </ul>
                            </Stack>
                          </> : null}
                      </div>
                    </Grid>
                  )) : null}
                </Grid>
              </Stack>
              :
              <Stack direction="column" sx={{ display: { xs: 'flex' }, my: 1 }} width={'100%'}>

                {/* subjects */}
                {/* <CourseSubjectsComponent course_subjects={courseObject.course_subjects} /> */}
                {(courseObject.course_subjects && courseObject.course_subjects.length > 0) ?
                  <>
                    <Typography component="p" variant='p' style={{ color: '#174feb', padding: '1vmin', textAlign: 'left' }}>In this course you will learn: </Typography>
                    <Stack direction="column" sx={{ display: { xs: 'flex', justifyContent: 'space-evenly' } }}>
                      <ul>
                        {courseObject.course_subjects.map((subject) =>
                          <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'start', padding: '1vmin' } }}>
                            - <img src={subject.icon} loading="lazy" alt="" width={'30vm'} />
                            <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center' } }}>
                              <Typography component="p" variant='p' style={{ color: '#333440', paddingLeft: '0.5vmin' }}> {subject.text} </Typography>
                            </Stack>
                          </Stack>
                        )}
                      </ul>
                    </Stack>
                  </> : null}

              </Stack>
          }

        </Stack>
        <FreeTrialButton course={courseObject} is_blus={true} />
      </Box>
    </>
  )
}