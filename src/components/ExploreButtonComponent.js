import React from 'react'
import { Button } from '@mui/material'

export default function ExploreButtonComponent() {
    return (
        <Button
            variant="contained"
            className={'brown_btn'}
            LinkComponent={'a'} href={'/our-courses'}>
            Explore Courses ..
        </Button>
    )
}