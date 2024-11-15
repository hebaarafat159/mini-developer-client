import React, { useEffect, useState } from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography, Stack, FormControl, MenuItem, InputLabel, Select, Grid, TextField } from '@mui/material'

export default function ProgrameTypeComponent({ requestData, updateRegistrationDataProperty, errors, courseId }) {

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
            {/* Select program type "In-person or online" */}
            <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold' }}>  Select Type of Coding Program: <span style={{ color: 'red' }}> * </span> </Typography>
            {errors.program_type !== '' && <Typography component="p" variant='p' style={{ color: 'red' }}>{errors.program_type}</Typography>}
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                value={requestData.program_type}
                onChange={(event) => {
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
                    {errors.region !== '' && <Typography variant='danger' style={{ fontSize: '1.5vw', color: 'red' }}>{errors.region}</Typography>}

                    <FormControl fullWidth>
                        <InputLabel id="active-regions-label">Select prefferred area in London</InputLabel>
                        {/* Regions  */}
                        <Select
                            labelId="active-regions-label"
                            id="region-select"
                            defaultValue={requestData.region}
                            value={requestData.region}
                            label="Select Your Prefferred Region: "
                            onChange={(event) => {
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

                    {/* when select region == other */}
                    {(requestData.region != null && requestData.region !== undefined && requestData.region.name === 'other') ?
                        <Grid container spacing={2} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    placeholder="Enter Your Regions in London"
                                    style={{ padding: '1vmin 0' }}
                                    defaultValue={requestData.other_region}
                                    onChange={(event) => {
                                        requestData.other_region = event.target.value;
                                    }}
                                    fullWidth />
                            </Grid>
                        </Grid>
                        : null}

                    {/* Select Upcomming courses if exists */}
                    {errors.classroom !== '' && <Typography variant='danger' style={{ fontSize: '1.5vw', color: 'red' }}>{errors.classroom}</Typography>}
                    {
                        (requestData.region != null && requestData.region !== undefined && requestData.region.has_upcomming_courses) && (classrooms !== null && classrooms.length > 0) &&
                        < FormControl fullWidth>
                            <InputLabel id="open-courses-label">Select Course Venue: </InputLabel>
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