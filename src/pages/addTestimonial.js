import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { TextField, Stack, Typography, Button, Grid, Rating } from '@mui/material'
import { Select, Option } from '@mui/joy';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import validator from "validator";
import { useNavigate } from 'react-router-dom'

export default function AddTestimonial() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses`)
            .then(response => response.json())
            .then(result => {
                setCourses(result.body);
            })
    }, []);

    // eslint-disable-next-line
    const [requestData, setRequestData] = useState(
        {
            person: '',
            course: null,
            rate: 5,
            text: '',
        }
    )

    const [requestErrorMsgs, setRequestErrorMsgs] = useState(
        {
            person: '',
            course: '',
            rate: '',
            text: '',
        }
    )

    const Item = styled(Paper)(({ theme }) => ({
        // margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }));

    const validateForm = () => {
        let valid = true;
        const errorMesgs = { ...requestErrorMsgs };

        // Validate person
        if (validator.isEmpty(requestData.person)) {
            errorMesgs.person = 'Please enter your name or your prefix name';
            valid = false;
        } else {
            errorMesgs.person = '';
        }

        // Validate course
        if (requestData.course == null) {
            errorMesgs.course = 'Please select the course';
            valid = false;
        } else {
            errorMesgs.course = '';
        }

        // Validate rate
        // if (requestData.rate === 0 || requestData.rate === '') {
        //     errorMesgs.rate = 'Please enter a number';
        //     valid = false;
        // } else if (requestData.rate < 0 || requestData.rate > 5) {
        //     errorMesgs.rate = 'Please enter a number between 1 and 5';
        //     valid = false;
        // } else {
        //     errorMesgs.rate = '';
        // }

        // Validate comment
        if (validator.isEmpty(requestData.text)) {
            errorMesgs.text = 'Please enter your feedback';
            valid = false;
        } else {
            errorMesgs.text = '';
        }
        // setErrors(errorMesgs)
        setRequestErrorMsgs(errorMesgs)
        return valid
    }

    function submit() {

        if (validateForm()) {
            alert(JSON.stringify(requestData));
            // save user testemonial 
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/testmonials/add`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestData)
                })
                .then(response => response.json())
                .then(result => {
                    if (result.status === 200) {
                        console.log(`Thanks for sharing your Feedback With us`);
                        navigate('/confirmation/feedback')
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <Stack className='recent-blogs d-block screen'>
            <Typography component="h5" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bolder', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Papyrus' }}>  Add New Testimonial </Typography>

            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '1.5vmin', alignContent: 'center' }} >

                {/* Parent Name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Person Name <span style={{ color: 'red' }}> * </span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.person}
                                onChange={(event) => {
                                    requestData.person = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.person)}
                                helperText={requestErrorMsgs.person}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Courses  */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Select A Course: <span style={{ color: 'red' }}> * </span></Typography>
                {(requestErrorMsgs.course !== '') && <Typography component="p" variant='p' style={{ color: 'red', alignItems: 'flex-start' }}> {requestErrorMsgs.course} </Typography>}
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Select
                            placeholder="Courses"
                            size="lg"
                            variant="outlined"
                            onChange={
                                (e, newValue) => {
                                    requestData.course = newValue;
                                }
                            }
                            fullWidth
                        >
                            {courses.length && courses.map((course, index) => (
                                <Option key={course._id} value={course}>
                                    {course.title}
                                </Option>
                            ))}
                        </Select>

                    </Grid>
                </Grid>

                {/* Comment  */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Comment: <span style={{ color: 'red' }}> * </span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.text}
                                onChange={(event) => {
                                    requestData.text = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.text)}
                                helperText={requestErrorMsgs.text}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* rating  */}
                {/* <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Select Your Rating <span style={{ color: 'red' }}> * </span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Rating
                            name="simple-controlled"
                            defaultValue={5}
                            value={5}
                            precision={0.5}
                            size="large"
                            sx={{ color: "#f06848" }}
                            onChange={
                            //    (event) => setRequestData({ ...requestData, rate: event.target.value })
                                (event, newValue) => {
                                    requestData.rate = newValue;
                                }
                            }
                        />
                    </Grid>
                </Grid> */}
            </Stack>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button
                    variant="contained"
                    onClick={() => submit()}
                    className="orange_btn"
                >
                    Submit
                </Button>
            </div>
        </Stack>
    )
}