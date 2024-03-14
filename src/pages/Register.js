import React, { useState, useEffect } from 'react'
import { Card, TextField, Stack, Typography, Button } from '@mui/material'
import cssStyle from '../css/styles.module.css'
import StudentRegisterComponent from '../components/StudentRegisterComponent'
import ProgrameTypeComponent from '../components/ProgrameTypeComponent'
import validator from "validator";
import { useParams } from 'react-router-dom'

export default function RegisterForm() {
    const minAge = 4
    const maxAge = 14
    const { courseId } = useParams();
    const [courseObject, setCourseObject] = useState({})

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
            alert(JSON.stringify(registerData));
          
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
                        console.log(`YOur Registration has been send to MINI developer, one of our team memeber will answer you shortly`);
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
    return (
        <Card className={cssStyle.page}>
            <Stack spacing={1} className={cssStyle.register_form_component} >
                <Typography style={{ fontWeight: 'bold', fontSize: '2vw', color: '#ed7d45' }}> Coding is the Language of the Future!</Typography>

                <Stack spacing={1} className={cssStyle.register_form_component} >
                    {/* Parent Name */}
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Parent </Typography>
                    <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >

                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue={registerData.first_name}
                            onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[0], event.target.value)}
                            error={Boolean(errors.parentFirstName)}
                            helperText={errors.parentFirstName}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            defaultValue={registerData.last_name}
                            value={registerData.last_name}
                            onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[1], event.target.value)}
                            error={Boolean(errors.parentLastName)}
                            helperText={errors.parentLastName}
                        />
                    </Stack>

                    {/* Email */}
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Email </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        type='email'
                        defaultValue={registerData.email}
                        value={registerData.email}
                        className={cssStyle.register_form_text_field}
                        onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[2], event.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />


                    {/* Mobile Number */}
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Mobile </Typography>
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
                    />

                    {
                        ((!validator.isEmpty(courseId)) && courseId !== '0') ?
                            <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Your Children will be registers in {courseObject.title} </Typography> : null
                    }

                    {/* add new child layout */}
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Children </Typography>
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
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> How did you hear about us? </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        defaultValue={registerData.hear_about_us}
                        className={cssStyle.register_form_text_field}
                        onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[6], event.target.value)}
                    />

                    {/* Any Questions */}
                    <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Do you have any questions or comments? </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        defaultValue={registerData.questions}
                        className={cssStyle.register_form_text_field}
                        onChange={(event) => updateRegistrationDataProperty(Object.keys(registerData)[7], event.target.value)}
                    />

                </Stack>
                {/* Submit Button */}
                <Button
                    variant="contained"
                    onClick={() => submit()}
                    className={cssStyle.orage_btn}
                > Submit </Button>
            </Stack>
        </Card>
    )
}