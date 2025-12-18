import { Button } from '@mui/material'
import React from 'react'

export default function FreeTrialButton({ course, is_blus }) {
    let linkRef = "/sign-up-form"
    if (course !== null) linkRef = `/sign-up-form/${course._id}`
    return (
        <Button variant="contained"
            className={is_blus ? 'blue_btn' : 'orage_btn'}
            LinkComponent={'a'} href={linkRef}> Book Free Trial </Button>
    )
}