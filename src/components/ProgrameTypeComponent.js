import React from 'react'
import cssStyle from '../css/styles.module.css'
import { Radio, RadioGroup, FormControlLabel, Typography, Stack, FormControl, MenuItem, InputLabel, Select } from '@mui/material'

export default function ProgrameTypeComponent({ registerData, updateRegistrationDataProperty, errors }) {

    const programTypes = ['In Person', 'Online']
    const locations = ['Ealing', 'Northolt', 'Acton']

    // function handleSelectedTypeChange(event) {
    //     setProgramType(event.target.value)
    //     setLocation('')
    // }

    // function handleSelectedLocationChange(event) {
    //     setLocation(event.target.value)
    // }

    return (
        <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >
            <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Select Type of Coding Program:  </Typography>

            {errors.programType !== '' && <Typography variant='danger' style={{ fontSize: '1.5vw', color: '#333440' }}>{errors.programType}</Typography>}
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                value={registerData.program_type}
                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[4], event.target.value)}>
                {programTypes && programTypes.map(
                    (type, index) =>
                        (<FormControlLabel value={type} control={<Radio />} label={type} />))}

            </RadioGroup>
            {
                registerData.program_type === programTypes[0] &&
                <>
                    {errors.preffered_location !== '' && <Typography variant='danger' style={{ fontSize: '1.5vw', color: 'red' }}>{errors.preffered_location}</Typography>}

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select prefferred area for In-person course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={registerData.location}
                            label="Select prefferred area for In-person course"
                            onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[5], event.target.value)}>
                            {locations && locations.map(
                                (location, index) =>
                                    (<MenuItem value={location}>{location}</MenuItem>))}
                        </Select>
                    </FormControl>
                </>
            }

        </Stack>
    )
}