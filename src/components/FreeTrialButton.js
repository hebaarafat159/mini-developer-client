import { Button } from '@mui/material'
import React from 'react'
import cssStyle from '../css/styles.module.css'

export default function FreeTrialButton({ course }) {
    let linkRef = "/register/0"
    if (course !== null) linkRef = `/register/${course._id}`
    return (
        <Button variant="contained"
            className={cssStyle.orage_btn}
            LinkComponent={'a'} href={linkRef}> Book Free Trial </Button>
    )
}