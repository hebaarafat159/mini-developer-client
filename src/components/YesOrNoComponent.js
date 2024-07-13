import React from 'react'
import { Typography, RadioGroup, FormControlLabel, Radio, Stack } from '@mui/material'

export default function YesOrNoComponent({ displayText, handleSelection, selectedValue }) {

    return (
        <Stack direction="column" sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >

            <Typography component="p" variant='p' style={{ color: '#333440' }}> {displayText} <span style={{ color: 'red' }}> * </span> </Typography>
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue={selectedValue ? selectedValue : true}
                // value={selectedValue ? selectedValue : true}
                onChange={(event) => handleSelection(event.target.value)}>

                <FormControlLabel value={true} control={<Radio />} label={'Yes'} />
                <FormControlLabel value={false} control={<Radio />} label={'No'} />

            </RadioGroup>
        </Stack>
    )
}