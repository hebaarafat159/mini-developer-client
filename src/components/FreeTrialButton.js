import { Button } from '@mui/material'
import React from 'react'

export default function FreeTrialButton() {
    return (
        <Button variant="contained" style={{
            borderRadius: 10,
            background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
            fontSize: "2.5vmin"
        }} LinkComponent={'a'} href={'/register'}> Book Free Trial </Button>
    )
}