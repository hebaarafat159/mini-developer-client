import React from 'react'
import { Button } from '@mui/material'

export default function ExploreButtonComponent() {
    return (
        <Button variant="contained" style={{
            borderRadius: 10,
            backgroundColor: "#9e532d",
            fontSize: "2.5vmin",
            color: "white",
        }} LinkComponent={'a'} href={'/courses'}>
            Explore Courses ..
        </Button>
    )
}