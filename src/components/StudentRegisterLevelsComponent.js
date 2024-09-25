import React from 'react'
import { Typography, RadioGroup, FormControlLabel, Radio, Stack } from '@mui/material'

export default function StudentRegisterLevelsComponent({ levels, handleSelection, child }) {

    return (
        <Stack direction="column" sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >

            <Typography component="p" variant='p' style={{ color: '#333440' }}> Select Coding Level: <span style={{ color: 'red' }}> * </span> </Typography>
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue={(levels && levels.length > 0) ? levels[0] : null}
                onChange={(event) => handleSelection(levels[event.target.value])}>

                {(levels && levels.length > 0) ? levels.map((level, index) => (
                    <FormControlLabel value={index} control={<Radio />} label={level.title} />
                )) : null}

            </RadioGroup>
        </Stack>
    )
}