import { Button } from '@mui/material'
import React from 'react'

export default function FreeTrialButton({ course, is_blus }) {
    let linkRef = "/register/0"
    if (course !== null) linkRef = `/register/${course._id}`
    return (
        <Button variant="contained"
            className={is_blus ? 'blue_btn' : 'orage_btn'}
            LinkComponent={'a'} href={linkRef}> Book Free Trial </Button>
    )
}