import React from 'react'
import { Button } from '@mui/material'
import cssStyle from '../css/styles.module.css'

export default function ExploreButtonComponent() {
    return (
        <Button 
        variant="contained" 
        className={cssStyle.brawn_btn}
        LinkComponent={'a'} href={'/courses'}>
            Explore Courses ..
        </Button>
    )
}