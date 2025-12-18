import React, { useState, useEffect } from 'react'
import { TextField, Stack, Typography, Button, Grid } from '@mui/material'
import StudentRegisterComponent from '../components/StudentRegisterComponent'
import ProgrameTypeComponent from '../components/ProgrameTypeComponent'
import validator from "validator";
import { useNavigate, useParams } from 'react-router-dom'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SEOComponent from '../components/SEOComponent.js'
import { parse, isValid } from "date-fns";

export default function RegisterForm() {
    const { courseId } = useParams();
    const [courseObject, setCourseObject] = useState({})
    const navigate = useNavigate();
    const dateFormate = "dd/MM/yyyy"

    // single child object
    const childObject = {
        first_name: '',
        last_name: '',
        age: '',
        has_computer: true,
        email: '',
        course_level: '',
        previous_coding_lessons: false,
        dob: ''
    }

    // single child object error
    const childErrorObject = {
        first_name: '',
        last_name: '',
        age: '',
        has_computer: true,
        email: '',
        dob: ''
    }

    // data object to be sent to the server
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
            children: [{ ...childObject }],
            course: null,
            region: null,
            classroom: null,
            program_type: ''
        }
    )

    // error data object to be sent to the server
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
            children: [{ ...childErrorObject }],
            course: '',
            region: '',
            classroom: '',
            program_type: ''

        }
    )

    // load course object if this page is opened from selected course 
    useEffect(() => {

        if (courseId !== undefined && courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') {
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${courseId}`)
                .then(response => response.json())
                .then(result => {
                    setCourseObject(result.body);
                    console.log(`Course Object : ${result.body}`)
                })
        }
    }, [courseId]);

    // update request object item value 
    function updateRegistrationDataProperty(propertyName, newValue) {
        const regData = { ...requestData, [propertyName]: newValue }
        setRequestData(regData)
    };

    /**
     * calculate each child age
     * @param {*} childObject 
     */
    function calculateChildAge(childObject) {
        const birth = parse(childObject.dob, dateFormate, new Date());
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        childObject.age = age
    }

    // validated request object before sending to the server 
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
            errorMesgs.program_type = 'Please Select your preferred Program';
            valid = false;
        } else {
            errorMesgs.program_type = '';
            // Validate preffered location type 
            if (requestData.program_type === 'In Person' && (requestData.region === null || requestData.region === undefined)) {
                errorMesgs.region = 'Please Select your preferred area';
                valid = false;
            } else {
                errorMesgs.region = '';
                // validated courses places
                if (courseId !== undefined && courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') {
                    if ((requestData.region !== null && requestData.region !== undefined && requestData.region.has_upcomming_courses) && (requestData.classroom === null || requestData.classroom === undefined)) {
                        errorMesgs.classroom = 'Please Select your preferred  area';
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

                // check child age
                // if (validator.isEmpty(childObject.age)) {
                //     errorMesgs.children[index].age = 'This field is required'
                //     valid = false;
                // } 
                // else {
                //     errorMesgs.children[index].age = ''
                // }

                // check child Date of birth
                if (validator.isEmpty(childObject.dob)) {
                    errorMesgs.children[index].dob = 'This field is required'
                    valid = false;
                }
                else {

                    const parsedDate = parse(childObject.dob, dateFormate, new Date());

                    valid = isValid(parsedDate);
                    if (!valid) {
                        errorMesgs.children[index].dob = `Invalid date. Please enter the correct format ${dateFormate}`
                    } else {
                        errorMesgs.children[index].dob = ''
                    }
                }
            })
        }

        // setErrors(errorMesgs)
        setRequestErrorMsgs(errorMesgs)
        return valid
    }

    // add new child to children array
    function addNewChild() {
        requestData.children.push(childObject)
        requestErrorMsgs.children.push(childErrorObject)
        updateChildrenArray(requestData.children)
    };

    // update child object in the children array 
    function updateChildrenArray(childArray) {
        requestData.children = [...childArray]
        // 1 is the index of children array in the requestData object                     
        updateRegistrationDataProperty(Object.keys(requestData)[1], requestData.children);
    }

    // send request data to server 
    function submit() {

        if (validateForm()) {

            if (courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') requestData.course = { ...courseObject }

            // eslint-disable-next-line
            requestData.children.map((childObject, index) => {
                // calculate child age when the dob is valid
                calculateChildAge(childObject)
            })
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
                        console.log(`Thank for your Registration with Mini Developer coding classes. One of our team memebers will contact you soon`);
                        navigate('/confirmation/registeration')
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
        <Stack className='recent-blogs d-block screen'>
            <SEOComponent
                seoData={{
                    seo_slug: (courseId !== undefined && courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') ? `/sign-up-form/${courseObject.seo_slug}` : '/sign-up-form',
                    seo_title: "Sign Up Form | Mini Developer",
                    seo_description: "Register for Mini Developer classes and let your child enjoy an exciting journey with Coding. Get a free trail from Mini Developer.",
                    meta_description: "Register for Mini Developer classes and let your child enjoy an exciting journey with Coding. Get a free trail from Mini Developer.",
                    meta_keywords: "Mini Developer Registration, coding classes registration, coding courses registration, coding lessons registration, coding clubs registration, coding camps registration"
                }} />
            <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center', padding: '1.5vmin' }} >
                {/* course slogn */}
                {
                    (courseId !== undefined && courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') ?
                        <Typography component="h5" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bolder', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Papyrus' }}>  {courseObject.slogan} </Typography>
                        :  <Typography component="h4" variant='h4' style={{ color: '#ed7d45', textAlign: 'center', fontWeight: 'bolder', fontFamily: 'Papyrus', padding: '1vmin' }}>  Coding is the Language of the Future! </Typography>
                }

                {/* page title */}
                {
                    (courseId !== undefined && courseId !== null && (!validator.isEmpty(courseId)) && courseId !== '0') ?
                        <>
                            <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> <span >  {courseObject.title}  </span> Course</Typography>
                        </> : null
                }
                <Typography component="h5" variant='h5' style={{ color: 'black', fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> Registration </Typography>

                <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', padding: '1.5vmin' }} >

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
                    <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> Phone Number <span style={{ color: 'red' }}> * </span> <span style={{ color: '#333440', fontWeight: 'lighter', fontStyle: 'italic', fontSize: 12 }}>(preferably number with WhatsApp)</span></Typography>
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
                        Add Child Details <span style={{ color: 'red' }}> * </span> </Typography>

                    {/* case of add new child after having children */}
                    {
                        (requestData.children && requestData.children.length > 0) ?
                            requestData.children.map((childObject, index) =>
                                < StudentRegisterComponent
                                    index={index}
                                    requestData={requestData}
                                    requestErrorMsgs={requestErrorMsgs}
                                    updateChildrenArray={updateChildrenArray}
                                    courseObject={courseObject}
                                    dateFormate={dateFormate} />)
                            : null
                    }

                    <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'end', padding: '1.5vmin' }} >

                        <Button
                            variant="contained"
                            onClick={() => addNewChild()}
                            className={'blue_btn'}> Add Another Child </Button>
                    </Stack>

                    {/* program type In-person or Online */}
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

                </Stack>

                {/* Submit Button */}
                <Button
                    variant="contained"
                    onClick={() => submit()}
                    className={'black_btn'}> Submit </Button>
            </Stack>
        </Stack>
    )
}