import React, { useState, useEffect } from 'react'
import { Card, TextField, Stack, Typography, Button, Grid } from '@mui/material'
import cssStyle from '../css/styles.module.css'
import StudentRegisterComponent from '../components/StudentRegisterComponent'
import ProgrameTypeComponent from '../components/ProgrameTypeComponent'
import validator from "validator";
import { useNavigate, useParams } from 'react-router-dom'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function RegisterForm() {
    const minAge = 4
    const maxAge = 14
    const { courseId } = useParams();
    const [courseObject, setCourseObject] = useState({})
    const navigate = useNavigate();

    const childObject = {
        first_name: '',
        last_name: '',
        age: '',
        has_computer: true,
        email: ''
    }

    const childErrorObject = {
        first_name: '',
        last_name: '',
        age: '',
        has_computer: '',
        email: ''
    }

    const [requestData, setRequestData] = useState(
        {
            parentData:
            {
                first_name: '',
                last_name: '',
                email: '',
                mobile: '',
                hear_about_us: '',
                questions: ''
            },
            children: [
                {
                    first_name: '',
                    last_name: '',
                    age: '',
                    hasComputer: true,
                    email: ''
                }
            ],
            course: null,
            region: null,
            classroom: null,
            program_type: ''
        }
    )

    const [requestErrorMsgs, setRequestErrorMsgs] = useState(
        {
            parentData:
            {
                first_name: '',
                last_name: '',
                email: '',
                mobile: '',
                hear_about_us: '',
                questions: ''
            },
            children: [
                {
                    first_name: '',
                    last_name: '',
                    age: '',
                    has_computer: true,
                    email: ''
                }
            ],
            course: '',
            region: '',
            classroom: '',
            program_type: ''

        }
    )

    useEffect(() => {
        if ((!validator.isEmpty(courseId)) && courseId !== '0') {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${courseId}`)
                .then(response => response.json())
                .then(result => {
                    setCourseObject(result.body);
                    console.log(`Course Object : ${result.body}`)
                })
        }
    }, [courseId]);

    function updateRegistrationDataProperty(propertyName, newValue) {
        const regData = { ...requestData, [propertyName]: newValue }
        setRequestData(regData)
        // alert(`all Data: ${JSON.stringify(regData)}`)
    };

    const validateForm = () => {
        let valid = true;
        const errorMesgs = { ...requestErrorMsgs };
        // Validate parent first name
        if (validator.isEmpty(requestData.parentData.first_name)) {
            errorMesgs.parentData.first_name = 'Parent first name is required';
            valid = false;
        } else {
            errorMesgs.parentData.first_name = '';
        }

        // Validate parent last name
        if (validator.isEmpty(requestData.parentData.last_name)) {
            errorMesgs.parentData.last_name = 'Parent Last name is required';
            valid = false;
        } else {
            errorMesgs.parentData.last_name = '';
        }

        // Validate email
        if (validator.isEmpty(requestData.parentData.email)) {
            errorMesgs.parentData.email = 'Email is required';
            valid = false;
        } else if (!validator.isEmail(requestData.parentData.email)) {
            errorMesgs.parentData.email = 'Invalid email format';
            valid = false;
        } else {
            errorMesgs.parentData.email = '';
        }

        // Validate mobile number
        if (validator.isEmpty(requestData.parentData.mobile)) {
            errorMesgs.parentData.mobile = 'Mobile is required';
            valid = false;
        } else if (!validator.isMobilePhone(requestData.parentData.mobile)) {
            errorMesgs.parentData.mobile = 'Invalid mobile number';
            valid = false;
        } else {
            errorMesgs.parentData.mobile = '';
        }

        // Validate program type 
        if (validator.isEmpty(requestData.program_type)) {
            errorMesgs.program_type = 'Please Select your preffered Program';
            valid = false;
        } else {
            errorMesgs.program_type = '';
            // Validate preffered location type 
            if (requestData.program_type === 'In Person' && (requestData.region === null || requestData.region === undefined)) {
                errorMesgs.region = 'Please Select your preffered location';
                valid = false;
            } else {
                errorMesgs.region = '';
                // TODO validated courses places
                if ((!validator.isEmpty(courseId)) && courseId !== '0') {
                    if (requestData.classroom === null || requestData.classroom === undefined) {
                        errorMesgs.classroom = 'Please Select your preffered course place';
                    } else {
                        errorMesgs.classroom = ''
                    }
                }
            }
        }

        if (requestData.children && requestData.children.length > 0) {
            // eslint-disable-next-line
            requestData.children.map((childObject, index) => {
                // check child first name
                if (validator.isEmpty(childObject.first_name)) {
                    errorMesgs.children[index].first_name = 'This field is required'
                    valid = false;
                } else {
                    errorMesgs.children[index].first_name = ''
                }

                // check child last name
                if (validator.isEmpty(childObject.last_name)) {
                    errorMesgs.children[index].last_name = 'This field is required'
                    valid = false;
                } else {
                    errorMesgs.children[index].last_name = ''
                }

                // check child first name
                if (validator.isEmpty(childObject.age)) {
                    errorMesgs.children[index].age = 'This field is required'
                    valid = false;
                } else if (childObject.age < minAge || childObject.age > maxAge) {
                    errorMesgs.children[index].age = `Age should be between ${minAge}-${maxAge}`
                    valid = false;
                }
                else {
                    errorMesgs.children[index].age = ''
                }
            })
        }

        // setErrors(errorMesgs)
        setRequestErrorMsgs(errorMesgs)
        return valid
    }

    function addNewChild() {
        requestData.children.push(childObject)
        requestErrorMsgs.children.push(childErrorObject)
        updateChildrenArray(requestData.children)
    };

    function updateChildrenArray(childArray) {
        requestData.children = [...childArray]
        // 1 is the index of children array in the requestData object                     
        updateRegistrationDataProperty(Object.keys(requestData)[1], requestData.children);
    }

    function submit() {
        // alert(JSON.stringify(requestData));

        if (validateForm()) {
            if ((!validator.isEmpty(courseId)) && courseId !== '0') requestData.course.course_id = courseId
            // alert(JSON.stringify(requestData));

            fetch(`${process.env.REACT_APP_URL_APP_PATH}/classrooms/register`,
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
                        console.log(`Your Registration has been send to MINI developer, one of our team memeber will answer you shortly`);
                        // TODO redirect to confirmation page
                        // this.props.history.push('/confirmation')
                        navigate('/confirmation')
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

    const Item = styled(Paper)(({ theme }) => ({
        // margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }));

    return (
        <Card className='recent-blogs d-block'>
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '1.5vmin' }} >
                {/* page title */}
                <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> Registration </Typography>
                {
                    ((!validator.isEmpty(courseId)) && courseId !== '0') ?
                        <>
                            <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> in <span style={{ color: 'red' }}>  {courseObject.title}  </span></Typography>
                            <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> Course </Typography>
                        </> : null
                }

                {/* parent name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Parent Name <span style={{ color: 'red' }}> * </span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={6}>
                        <Item>
                            <TextField
                                required
                                label="First Name"
                                defaultValue={requestData.parentData.first_name}
                                onChange={(event) => {
                                    requestData.parentData.first_name = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.first_name)}
                                helperText={requestErrorMsgs.parentData.first_name}
                                fullWidth />
                        </Item>
                    </Grid>

                    <Grid item xs={8} md={6}>
                        <Item>
                            <TextField
                                required
                                label="Last Name"
                                defaultValue={requestData.parentData.last_name}
                                onChange={(event) => {
                                    requestData.parentData.last_name = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.last_name)}
                                helperText={requestErrorMsgs.parentData.last_name}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* email */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Email <span style={{ color: 'red' }}> * </span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.parentData.email}
                                onChange={(event) => {
                                    requestData.parentData.email = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.email)}
                                helperText={requestErrorMsgs.parentData.email}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Mobile Number */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Mobile <span style={{ color: 'red' }}> * </span> <span style={{ color: '#333440', fontWeight: 'lighter', fontStyle: 'italic' }}>(preferably number with WhatsApp)</span></Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.parentData.mobile}
                                onChange={(event) => {
                                    requestData.parentData.mobile = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.mobile)}
                                helperText={requestErrorMsgs.parentData.mobile}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* children section */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', justifyContent: 'center', alignItems: 'flex-start' }}>
                    Add Your Children <span style={{ color: 'red' }}> * </span> </Typography>

                {/* case of add new child after having children */}
                {
                    (requestData.children && requestData.children.length > 0) ?
                        requestData.children.map((childObject, index) =>
                            < StudentRegisterComponent
                                index={index}
                                requestData={requestData}
                                requestErrorMsgs={requestErrorMsgs}
                                updateChildrenArray={updateChildrenArray} />)
                        : null
                }
                <Button
                    variant="contained"
                    onClick={addNewChild}
                    style={{
                        borderRadius: 5,
                        background: 'linear-gradient(to bottom,#80AAC7, #4F8DB9 )',
                        // fontSize: "2.5vmin",
                        width: 'auto',
                        padding: '1vmin'
                    }}> Add Another Child </Button>

                {/* program type In=person or Online */}
                <ProgrameTypeComponent requestData={requestData} updateRegistrationDataProperty={updateRegistrationDataProperty} errors={requestErrorMsgs} courseId={courseId} />

                {/* hear about us */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> How did you hear about us? </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.parentData.hear_about_us}
                                onChange={(event) => {
                                    requestData.parentData.hear_about_us = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.hear_about_us)}
                                helperText={requestErrorMsgs.parentData.hear_about_us}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Any Questions */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}>  Do you have any questions or comments?</Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                defaultValue={requestData.parentData.questions}
                                onChange={(event) => {
                                    requestData.parentData.questions = event.target.value;
                                }}
                                error={Boolean(requestErrorMsgs.parentData.questions)}
                                helperText={requestErrorMsgs.parentData.questions}
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
        </Card>
    )
}