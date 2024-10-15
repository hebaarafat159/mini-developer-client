import React from 'react'
import { Button } from '@mui/material'

export default function ExploreButtonComponent() {
    return (
        <Button
            variant="contained"
            className={'brawn_btn'}
            LinkComponent={'a'} href={'/our-courses'}>
            Explore Courses ..
        </Button>
    )
}