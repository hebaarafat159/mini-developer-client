import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'
import FreeTrialButton from './FreeTrialButton'
/*import why_us from '../assets/why_us.jpg'*/
import SEOComponent from './SEOComponent.js'
import place_icon from '../assets/place_icon.png'
import followUp_icon from '../assets/followUp_icon.png'
import learn_icon from '../assets/learn_icon.png'
import certs_icon from '../assets/certs_icon.png'
import discounts_icon from '../assets/discounts_icon.png'
import tutors_icon from '../assets/tutors_icon.png'

export default function WhyUsComponent() {

  const reasonsWhyUs1 = [
    {
      icon: tutors_icon,
      title: "Experienced Tutors",
      points: ["Software Developers","DBS checked","Safeguarding trained"]
    },
    {
      icon: learn_icon,
      title: "Tailored Learning",
      points: ["Fun and Interactive","Variety of Coding Courses","Different Learning Levels"]
    },
    {
      icon: followUp_icon,
      title: "Follow-Up Support",
      points: ["Keepsake Booklets","Fun Homework Activities"]
    },
  ]   
  
    const reasonsWhyUs2 = [
    {
      icon: place_icon,
      title: "Online or In-Person",
      title2: ""
    },
    {
      icon: discounts_icon,
      title: "- Free Trials",
      title2: "- Siblings Discount"
    },
    {
      icon: certs_icon,
      title: "Accomplishment",
      title2: "Certificates"
    },
  ] 

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', background: 'white', padding: '2vw' }} className='screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "/why-us",
                    seo_title: "Why Us? | Mini Developer",
                    seo_description: "Here is why you would surely want to choose Mini Developer Coding classes for children.",
                    meta_description: "Here is why you would surely want to choose Mini Developer Coding classes for children.",
                    meta_keywords: "why choose mini developer, mini developer coding classes, mini developer programming classes, mini developer coding school"
                }} />
            <Typography component="h2" variant='h4' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' , whiteSpace: 'pre-line' }}>
                Why Choose <br />
                <span style={{ color:'#ed7d45 '}}>Mini Developer</span><br />                
                Coding Classes ?
            </Typography>

          <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
            {reasonsWhyUs1.map((reason, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Stack direction="column" sx={{ display: { xs: 'flex', alignItems: 'center', margin: '4vmin' } }}>
                  <img src={reason.icon} loading="lazy" alt="" width={'100vm'} />
                  <Typography component="h5" variant="h6"  style={{ fontWeight: 'bold', color: '#333440', textAlign: "center", paddingLeft: "2vmin" }}>{reason.title}</Typography>
                    <Stack direction="column" sx={{ display: { xs: 'flex', alignItems: 'left', textAlign: "left", marginTop: '2vmin' } }}>
                        {reason.points.map((point, idx) => (
                            <Typography key={idx} component="subtitle1" variant="subtitle2" sx={{ fontWeight: 300 }} style={{ color: 'black', textAlign: "left", paddingLeft: "2vmin" }}>• {point}</Typography>
                        ))}
                    </Stack>    
                </Stack>
              </Grid>
            )) }
            {reasonsWhyUs2.map((reason, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Stack direction="column" sx={{ display: { xs: 'flex', alignItems: 'center', margin: '4vmin' } }}>
                  <img src={reason.icon} loading="lazy" alt="" width={'100vm'} />
                  <Typography component="h6" variant="h6"  style={{ fontWeight: 'bold', color: '#333440', textAlign: "center", paddingLeft: "2vmin" }}>{reason.title}</Typography>
                  <Typography component="h6" variant="h6"  style={{ fontWeight: 'bold', color: '#333440', textAlign: "center", paddingLeft: "2vmin" }}>{reason.title2}</Typography>   
                </Stack>
              </Grid>
            )) }
          </Grid>

          <FreeTrialButton course={null} />
           {/*
            <Grid container columns={{ xs: 2, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', padding: '3vw' }} >     
                        <img src={why_us} loading="lazy" alt="" width={'105%'} />
                    </Stack>
                </Grid>
            </Grid>
            */}   
        </Stack>     
    )
}