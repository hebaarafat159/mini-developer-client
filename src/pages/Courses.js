import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material'
import CourseListComponent from '../components/CourseListItemComponent'
import cssStyle from '../css/styles.module.css'

export default function Courses() {
    const [courses, setCourses] = useState([])
    // ([
    //     {
    //         title: "Storytelling & Animation",
    //         age: "7+",
    //         language: "Scratch",
    //         cover_image: "https://drive.google.com/thumbnail?id=13AVf_kWa1-cAL-fRZulLSQ992IWFp4_6"
    //     },
    //     {
    //         id: 2,
    //         title: "Advanced Storytelling & Animation",
    //         age: "7+",
    //         language: "Scratch",
    //         cover_image: "https://drive.google.com/thumbnail?id=1B6Lm0YkaMmDscJl0uF-DGHeN464SstbZ"
    //     },
    //     {
    //         id: 3,
    //         title: "Coding Foundation",
    //         age: "9+",
    //         language: "Java",
    //         cover_image: "https://drive.google.com/thumbnail?id=1TU02wKQH07N-0X1fmevxMRyyACWOM86b"
    //     },
    //     {
    //         id: 4,
    //         title: "Advanced Coding Concepts",
    //         age: "9+",
    //         language: "Java",
    //         cover_image: "https://drive.google.com/thumbnail?id=1oV3jDyJpv-Lm_flFzX0QK1cOTWnR1naX"
    //     },
    //     {
    //         id: 5,
    //         title: "Professional Coding",
    //         age: "9+",
    //         language: "Java (Algorithms)",
    //         cover_image: "https://drive.google.com/thumbnail?id=1nDBhz-KTMWWNYbUgp50TQZM1BjwWV3eP"
    //     },
    //     {
    //         id: 6,
    //         title: "Database Management",
    //         age: "12+",
    //         language: "MySQL",
    //         cover_image: "https://drive.google.com/thumbnail?id=1ejD9VuTSd8P4YSLMhqbov0sF9IyPmvEo"
    //     },
    //     {
    //         id: 7,
    //         title: "Web Development",
    //         age: "12+",
    //         language: "HTML, CSS, JavaScript",
    //         cover_image: "https://drive.google.com/thumbnail?id=1jPx_TUsvx1SflUU20x_yYc82MpWF3HK0"
    //     },
    //     {
    //         id: 8,
    //         title: "Mobile Development",
    //         age: "12+",
    //         language: "Android/Kotlin",
    //         cover_image: "https://drive.google.com/thumbnail?id=1dEyu-Qgpj1NloKCOTnZrXGa2VSRbGMJN"
    //     }
    // ]);

    useEffect(() => {
        // fetch('http://localhost:4000/courses')
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses`)
            .then(response => response.json())
            .then(result => {
                setCourses(result.body);
            })
    }, []);
    return (
        <Card className={cssStyle.page}>
            {courses ? courses.map((course) => <CourseListComponent course={course} key={course._id} />) : null}
        </Card>
    )
}