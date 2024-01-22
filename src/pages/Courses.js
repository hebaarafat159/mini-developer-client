import React, { useState } from 'react'
import { Card } from '@mui/material'
import CourseListComponent from '../components/CourseListItemComponent'
import cssStyle from '../css/styles.module.css'

export default function Courses() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Storytelling & Animation",
            age: "7+",
            language: "Scratch",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 2,
            title: "Advanced Storytelling & Animation",
            age: "7+",
            language: "Scratch",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 3,
            title: "Coding Foundation",
            age: "9+",
            language: "Java",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 4,
            title: "Advanced Coding Concepts",
            age: "9+",
            language: "Java",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 5,
            title: "Professional Coding",
            age: "9+",
            language: "Java (Algorithms)",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 6,
            title: "Database Management",
            age: "12+",
            language: "MySQL",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 7,
            title: "Web Development",
            age: "12+",
            language: "HTML, CSS, JavaScript",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        },
        {
            id: 8,
            title: "Mobile Development",
            age: "12+",
            language: "Android/Kotlin",
            image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19"
        }
    ]);
    return (
        <Card className={cssStyle.page}>
            {courses ? courses.map((course) => <CourseListComponent course={course} />) : null}
        </Card>
    )
}