import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography, Stack, FormControl, MenuItem, InputLabel, Select } from '@mui/material'

export default function ProgrameTypeComponent({ requestData, updateRegistrationDataProperty, errors, courseId }) {

    const programTypes = ['In Person', 'Online']

    // const [selectedRegion, setSelectedRegion] = useState({})
    const [regions, setRegions] = useState([])
    const [classrooms, setClassrooms] = useState([])
    // const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/locations/regions/active`)
            // fetch('http://localhost:4000/locations/regions')
            .then(response => response.json())
            .then(result => {
                console.log(`Regions: ${JSON.stringify(result)}`);

                setRegions(result.body);

            })

        // fetch(`${process.env.REACT_APP_URL_APP_PATH}/locations/regions/active`)
        // .then(response => response.json())
        // .then(result => {
        //     console.log(`Regions: ${JSON.stringify(result)}`);
        //     setRegions(result.body);
        // })
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
                value={requestData.program_type}
                onChange={(event) => {
                    // alert(`Selected: ${JSON.stringify(event.target.value)}`)
                    updateRegistrationDataProperty(Object.keys(requestData)[5], event.target.value)
                }}>
                {
                    programTypes && programTypes.map((type, index) =>
                        (<FormControlLabel value={type} control={<Radio />} label={type} />))
                }

            </RadioGroup>

            {/* Select Prefferred Region */}
            {
                requestData.program_type === programTypes[0] &&
                <>
                    {errors.region !== null && <Typography variant='danger' style={{ fontSize: '1.5vw', color: 'red' }}>{errors.region.name}</Typography>}

                    <FormControl fullWidth>
                        <InputLabel id="active-regions-label">Select prefferred area</InputLabel>
                        {/* Regions  */}
                        <Select
                            labelId="active-regions-label"
                            id="region-select"
                            defaultValue={requestData.region}
                            value={requestData.region}
                            label="Select Your Prefferred Region: "
                            onChange={(event) => {
                                // alert(`Selected region: ${JSON.stringify(event.target.value)}`);
                                // 3 is the index of region object in the requestData object
                                updateRegistrationDataProperty(Object.keys(requestData)[3], event.target.value)
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
                            <InputLabel id="open-courses-label">Open Course Places: </InputLabel>
                            {/* Regions Places */}
                            <Select
                                labelId="open-courses-label"
                                id="place-select"
                                value={requestData.classroom}
                                label="Select Your Prefferred Place:"
                                onChange={(event) => {
                                    // alert(`Selected Place: ${JSON.stringify(event.target.value)}`);
                                    // 4 is the index of classroom place object in the requestData object
                                    updateRegistrationDataProperty(Object.keys(requestData)[4], event.target.value)
                                }}>

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