import { Button } from '@mui/material'
import React from 'react'

export default function FreeTrialButton({ course }) {
    let linkRef = "/register/0"
    if(course !== null) linkRef = `/register/${course._id}`
    return (
        <Button variant="contained" style={{
            borderRadius: 10,
            background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
            fontSize: "2.5vmin"
        }} LinkComponent={'a'} href={linkRef}> Book Free Trial </Button>
    )
}