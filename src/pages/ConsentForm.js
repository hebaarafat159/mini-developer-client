// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// eslint-disable-next-line
import validator from "validator";
import { Card, TextField, Stack, Typography, Button, Grid } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import YesOrNoComponent from '../components/YesOrNoComponent';
import cssStyle from '../css/styles.module.css'

export default function ConsentForm() {
    // eslint-disable-next-line
    const { studentId } = useParams();
    // eslint-disable-next-line
    const [studentObject, setStudentObject] = useState({})
    const navigate = useNavigate();

    // eslint-disable-next-line
    const [studentData, setStudentData] = useState(
        {
            is_social_allowed: false,
            is_local_allowed: false,
            medical_condition: '',
            emergency_contact_name: '',
            emergency_contact_phone_number: '',
            comment: ''
        }
    )

    // eslint-disable-next-line
    const [requestErrorMsgs, setRequestErrorMsgs] = useState(
        {
            is_social_allowed: '',
            is_local_allowed: '',
            medical_condition: '',
            emergency_contact_name: '',
            Emergency_contact_phone_number: '',
            comment: ''
        }
    )

    // useEffect(() => {
    //     if ((!validator.isEmpty(studentId)) && studentId !== '0') {
    //         fetch(`${process.env.REACT_APP_URL_APP_PATH}/students/${studentId}`)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setStudentObject(result.body);
    //                 console.log(`Student Object : ${result.body}`)
    //             })
    //     }
    // }, [studentId]);

    function submit() {
        if (validateForm()) {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/students/:id/update`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(studentData)
                })
                .then(response => response.json())
                .then(result => {
                    if (result.status === 200) {
                        console.log(`Your Registration has been send to MINI developer, one of our team memeber will answer you shortly`);
                        navigate('/')
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            // Form is not valid, display error messages or take other actions
            console.log('Form validation failed');
        }
    }

    function validateForm() { }

    function handleIsSocialAllowed(selection) {
        studentData.is_social_allowed = selection;
    }

    function handleIsLocalAllowed(selection) {
        studentData.is_local_allowed = selection;
    }

    const Item = styled(Paper)(({ theme }) => ({
        // margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }));
    return (
        <Card className='recent-blogs d-block'>
            {/* {studentObject ? */}
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '1.5vmin' }} >
                <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> Mini Developer Consent Form </Typography>
                <Typography component="p" variant='p' style={{ color: '#333440', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> You are requested to kindly fill this consent form before you begin your coding journey with us. </Typography>

                {/* Child Name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Child Name </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                disabled={true}
                                // required
                                // defaultValue={`${studentObject.first_name} ${studentObject.last_name}`}
                                // value={`${studentObject.first_name} ${studentObject.last_name}`}
                                // onChange={(event) => {
                                //     requestData.parentData.email = event.target.value;
                                // }}
                                // error={Boolean(requestErrorMsgs.parentData.email)}
                                // helperText={requestErrorMsgs.parentData.email}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Parent Name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Parent Name </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                disabled={true}
                                // required
                                // defaultValue={`${studentObject.parent_id.first_name} ${studentObject.parent_id.last_name}`}
                                // value={`${studentObject.parent_id.first_name} ${studentObject.parent_id.last_name}`}
                                // onChange={(event) => {
                                //     requestData.parentData.email = event.target.value;
                                // }}
                                // error={Boolean(requestErrorMsgs.parentData.email)}
                                // helperText={requestErrorMsgs.parentData.email}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Email */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Email </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                disabled={true}
                                // required
                                // defaultValue={`${studentObject.parent_id.email}`}
                                // value={`${studentObject.parent_id.email}`}
                                // onChange={(event) => {
                                //     requestData.parentData.email = event.target.value;
                                // }}
                                // error={Boolean(requestErrorMsgs.parentData.email)}
                                // helperText={requestErrorMsgs.parentData.email}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Allow Social Media Images */}
                <Grid item xs={12}>
                    <YesOrNoComponent displayText={'I give permission for my child’s photograph to be used on the Mini Developer website, social media, digital marketing and publicity materials'} handleSelection={handleIsSocialAllowed} />
                </Grid>

                {/* is local photos allowed */}
                <Grid item xs={12}>
                    <YesOrNoComponent displayText={'I give my permission for my child’s image to be used to record their Learning Journey (both paper copies and online).'} handleSelection={handleIsLocalAllowed} />
                </Grid>

                {/* Medical Condition */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Does your child have any medical condition or allergy?
                    <span style={{ color: '#333440', fontWeight: 'normal' }}> (if yes, then please provide details here) </span> </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                defaultValue={`${studentData.medical_condition}`}
                                onChange={(event) => {
                                    studentData.medical_condition = event.target.value;
                                }}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Emergency Contact Name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Emergency Contact Name </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                defaultValue={`${studentData.emergency_contact_name}`}
                                onChange={(event) => {
                                    studentData.emergency_contact_name = event.target.value;
                                }}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Emergency Contact Phone Number */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Emergency Contact Phone Number </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                defaultValue={`${studentData.emergency_contact_phone_number}`}
                                onChange={(event) => {
                                    studentData.emergency_contact_phone_number = event.target.value;
                                }}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Comments */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Do you have any questions or comments? </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                defaultValue={`${studentData.comment}`}
                                onChange={(event) => {
                                    studentData.comment = event.target.value;
                                }}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Button
                    variant="contained"
                    onClick={() => submit()}
                    className={cssStyle.orage_btn}> Submit </Button>
            </Stack>
            {/* : null} */}
        </Card>
    )
}