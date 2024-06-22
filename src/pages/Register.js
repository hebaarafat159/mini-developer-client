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
    const [locations, setLocations] = useState([])

    useEffect(() => {
        if ((!validator.isEmpty(courseId)) && courseId !== '0') {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${courseId}`)
                .then(response => response.json())
                .then(result => {
                    setCourseObject(result.body);
                    console.log(`Course Object : ${result.body}`)
                })
        }

        // fetch(`${process.env.REACT_APP_URL_APP_PATH}/locations/regions`)
        fetch('http://localhost:4000/locations/regions')
            .then(response => response.json())
            .then(result => {
                console.log(`Regions: ${JSON.stringify(result)}`);

                setLocations(result.body);

            })
    }, [courseId, locations]);

    const childObject = {
        first_name: '',
        last_name: '',
        age: '',
        hasComputer: true
    }

    const childErrorObject = {
        childFirstName: '',
        childLastName: '',
        age: '',
        hasComputer: ''
    }

    const [registerData, setRegisterData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        program_type: '',
        preffered_location: '',
        hear_about_us: '',
        questions: '',
        children: [{
            first_name: '',
            last_name: '',
            age: '',
            hasComputer: true
        }],
        course_id: ''
    })

    const [errors, setErrors] = useState({
        parentFirstName: '',
        parentLastName: '',
        email: '',
        mobileNumber: '',
        programType: '',
        preffered_location: '',
        hearAboutUs: '',
        questions: '',
        children: [{
            childFirstName: '',
            childLastName: '',
            age: '',
            hasComputer: ''
        }]
    });

    function updateRegistrationDataProperty(propertyName, newValue) {
        const regData = { ...registerData, [propertyName]: newValue }
        setRegisterData(regData)
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validate parent first name
        if (validator.isEmpty(registerData.first_name)) {
            newErrors.parentFirstName = 'Parent first name is required';
            valid = false;
        } else {
            newErrors.parentFirstName = '';
        }

        // Validate parent last name
        if (validator.isEmpty(registerData.last_name)) {
            newErrors.parentLastName = 'Parent Last name is required';
            valid = false;
        } else {
            newErrors.parentLastName = '';
        }

        // Validate email
        if (validator.isEmpty(registerData.email)) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validator.isEmail(registerData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        } else {
            newErrors.email = '';
        }

        // Validate mobile number
        if (validator.isEmpty(registerData.mobile)) {
            newErrors.mobileNumber = 'Mobile is required';
            valid = false;
        } else if (!validator.isMobilePhone(registerData.mobile)) {
            newErrors.mobileNumber = 'Invalid mobile number';
            valid = false;
        } else {
            newErrors.mobileNumber = '';
        }

        // Validate program type 
        if (validator.isEmpty(registerData.program_type)) {
            newErrors.programType = 'Please Select your preffered Program';
            valid = false;
        } else {
            // Validate preffered location type 
            if (registerData.program_type === 'In Person' && validator.isEmpty(registerData.preffered_location)) {
                newErrors.preffered_location = 'Please Select your preffered location';
                valid = false;
            } else {
                newErrors.preffered_location = '';
                newErrors.programType = '';
            }
            newErrors.mobileNumber = '';
        }

        if (registerData.children && registerData.children.length > 0) {
            // eslint-disable-next-line
            registerData.children.map((childObject, index) => {
                // check child first name
                if (validator.isEmpty(childObject.first_name)) {
                    newErrors.children[index].childFirstName = 'This field is required'
                    valid = false;
                } else {
                    newErrors.children[index].childFirstName = ''
                }

                // check child last name
                if (validator.isEmpty(childObject.last_name)) {
                    newErrors.children[index].childLastName = 'This field is required'
                    valid = false;
                } else {
                    newErrors.children[index].childLastName = ''
                }

                // check child first name
                if (validator.isEmpty(childObject.age)) {
                    newErrors.children[index].age = 'This field is required'
                    valid = false;
                } else if (childObject.age < minAge || childObject.age > maxAge) {
                    newErrors.children[index].age = `Age should be between ${minAge}-${maxAge}`
                    valid = false;
                }
                else {
                    newErrors.children[index].age = ''
                }
            })
        }

        setErrors(newErrors)
        return valid
    }

    function addNewChild() {
        registerData.children.push(childObject)
        errors.children.push(childErrorObject)
        updateRegistrationDataProperty(Object.keys(registerData)[8], registerData.children);
    };

    function submit() {
        if (validateForm()) {
            if ((!validator.isEmpty(courseId)) && courseId !== '0') registerData.course_id = courseId
            // alert(JSON.stringify(registerData));

            fetch(`${process.env.REACT_APP_URL_APP_PATH}/classrooms/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(registerData)
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
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '10vw' }} >
                {/* page title */}
                <Typography component="h5" variant='h5' style={{ color: '#ed7d45', alignItems: 'center' }}> Coding is the Language of the Future! </Typography>
                {/* parent name */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Parent Name </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={6}>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                defaultValue={registerData.first_name}
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[0], event.target.value)}
                                error={Boolean(errors.parentFirstName)}
                                helperText={errors.parentFirstName}
                                fullWidth />
                        </Item>
                    </Grid>

                    <Grid item xs={8} md={6}>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                                defaultValue={registerData.last_name}
                                value={registerData.last_name}
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[1], event.target.value)}
                                error={Boolean(errors.parentLastName)}
                                helperText={errors.parentLastName}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* email */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Email </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                type='email'
                                defaultValue={registerData.email}
                                value={registerData.email}
                                className={Item}
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[2], event.target.value)}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                                fullWidth />
                        </Item>
                    </Grid>
                </Grid>

                {/* Mobile Number */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Mobile </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                type='tel'
                                defaultValue={registerData.mobileNumber}
                                value={registerData.mobileNumber}
                                className={cssStyle.register_form_text_field}
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[3], event.target.value)}
                                error={Boolean(errors.mobileNumber)}
                                helperText={errors.mobileNumber}
                                fullWidth />

                            {
                                ((!validator.isEmpty(courseId)) && courseId !== '0') ?
                                    <Typography style={{ fontSize: '1.5vw', color: '#ed7d45' }}> Your Children will be registered in "<span style={{ fontSize: '1.5vw', color: 'red' }}>{courseObject.title}</span>" Course </Typography> : null
                            }
                        </Item>
                    </Grid>
                </Grid>

                {/* add new child layout */}
                <Grid container spacing={1}>
                    <Grid item xs={6} md={8}>
                        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', justifyContent: 'center', alignItems: 'flex-start' }}> Children </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            onClick={addNewChild}
                            style={{
                                borderRadius: 10,
                                background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
                                fontSize: "2.5vmin",
                                display: 'flex',
                                width: '30vw'
                            }}> Add Child </Button>
                    </Grid>
                </Grid>

                {/* case of add new child after having children */}
                {
                    (registerData.children && registerData.children.length > 0) ?
                        registerData.children.map((childObject, index) =>
                            < StudentRegisterComponent
                                index={index}
                                registerData={registerData}
                                errors={errors}
                                updateRegistrationDataProperty={updateRegistrationDataProperty} />)
                        : null
                }

                {/* program type In=person or Online */}
                <ProgrameTypeComponent registerData={registerData} updateRegistrationDataProperty={updateRegistrationDataProperty} errors={errors} />

                {/* hear about us */}
                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> How did you hear about us? </Typography>
                <Grid container spacing={1} >
                    <Grid item xs={8} md={12}>
                        <Item>
                            <TextField
                                required
                                id="outlined-required"
                                defaultValue={registerData.hear_about_us}
                                className={cssStyle.register_form_text_field}
                                fullWidth
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[6], event.target.value)} />
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
                                id="outlined-required"
                                defaultValue={registerData.questions}
                                className={cssStyle.register_form_text_field}
                                fullWidth
                                onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[7], event.target.value)} />
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