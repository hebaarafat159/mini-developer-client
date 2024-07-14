import { Button } from '@mui/material'
import React from 'react'

export default function FreeTrialButton({ course }) {
    let linkRef = "/register/0"
    if (course !== null) linkRef = `/register/${course._id}`
    return (
        <Button variant="contained"
            className={'orage_btn'}
            LinkComponent={'a'} href={linkRef}> Book Free Trial </Button>
    )
}