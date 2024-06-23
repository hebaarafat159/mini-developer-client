import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography, Stack, FormControl, MenuItem, InputLabel, Select } from '@mui/material'

export default function ProgrameTypeComponent({ registerData, updateRegistrationDataProperty, errors, courseId }) {

    const programTypes = ['In Person', 'Online']

    // const [selectedRegion, setSelectedRegion] = useState({})
    const [regions, setRegions] = useState([])
    const [classrooms, setClassrooms] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/locations/regions/active`)
            .then(response => response.json())
            .then(result => {
                console.log(`Regions: ${JSON.stringify(result)}`);
                setRegions(result.body);
            })
    }, []);

    // useEffect(() => {

    // }, [Object.keys(registerData)[5]._id, courseId]);

    // TODO
    function getCoursePalces(region, courseId) {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/classrooms/places/${region}/${courseId}`)
            .then(response => response.json())
            .then(result => {
                console.log(`Places: ${JSON.stringify(result)}`);
                setClassrooms(result.body);
            })
    }

    return (
        <Stack direction="column" sx={{ justifyContent: 'space-evenly', padding: '2vw' }} >

            <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold' }}>  Select Type of Coding Program: </Typography>
            {errors.programType !== '' && <Typography component="p" variant='p' style={{ color: '#333440' }}>{errors.programType}</Typography>}
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                value={registerData.program_type}
                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[4], event.target.value)}>
                {
                    programTypes && programTypes.map((type, index) =>
                        (<FormControlLabel value={type} control={<Radio />} label={type} />))}

            </RadioGroup>

            {/* Select Prefferred Region */}
            {
                registerData.program_type === programTypes[0] &&
                <>
                    {errors.preffered_location !== '' && <Typography variant='danger' style={{ fontSize: '1.5vw', color: 'red' }}>{errors.preffered_location}</Typography>}

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select prefferred area</InputLabel>
                        {/* Regions  */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={registerData.location}
                            label="Select Your Prefferred Region: "
                            onChange={(event) => {
                                updateRegistrationDataProperty(Object.keys(registerData)[5], event.target.value)
                                console.log(`Selected region: ${JSON.stringify(event.target.value)}`);
                                if (event.target.value !== null && event.target.value !== undefined && courseId !== '0') {
                                    getCoursePalces(event.target.value._id, courseId)
                                }
                            }}>
                            {regions && regions.map(
                                (region, index) =>
                                    (<MenuItem value={region}>{region.name}</MenuItem>))}
                        </Select>
                    </FormControl>

                    {/* Select Upcomming courses if exists */}
                    {
                        (courseId !== '0') && (classrooms !== null && classrooms.length > 0) &&
                        < FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select prefferred place</InputLabel>
                            {/* Regions Places */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={registerData.location}
                                label="Select Your Prefferred Place:">
                                {/* onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[5], event.target.value)}> */}
                                {classrooms && classrooms.map(
                                    (classroom, index) =>
                                        (<MenuItem value={classroom}>{classroom.place_id.name} - {classroom.days}</MenuItem>))}
                            </Select>
                        </FormControl>
                    }

                </>
            }
        </Stack >
    )
}