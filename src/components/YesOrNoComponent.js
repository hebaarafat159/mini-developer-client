import React from 'react'
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material'

export default function YesOrNoComponent({ displayText, handleSelection }) {

    return (
        <>
            <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> {displayText} </Typography>
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue={true}
                onChange={(event) => handleSelection(event.target.value)}>

                <FormControlLabel value={true} control={<Radio />} label={'Yes'} />
                <FormControlLabel value={false} control={<Radio />} label={'No'} />

            </RadioGroup>
        </>
    )
}