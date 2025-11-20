import React, { useState } from 'react'
import { Stack, Typography, TextField, Grid, Button } from '@mui/material'
import validator from "validator";
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import location_logo from '../assets/location_icon.png'
import email_icon from '../assets/email_icon.png'
import SEOComponent from '../components/SEOComponent.js'

export default function ContactUs() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({
        nameError: '',
        emailError: '',
        phoneError: '',
        subjectError: '',
        messageError: ''
    })

    const titleCss = {
        listStyleType: 'none',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        padding: '1vmin'
    }

    const textCss = {
        textDecoration: 'none',
        color: '#333440',
        fontWeight: 'bold',
        alignItems: 'center',
        padding: '1vmin',
        fontStyle: 'italic'
    }

    const formTitleCss = {
        color: '#333440',
        fontWeight: 'bold',
        alignItems: 'flex-start',
        padding: '1vmin'
    }

    const validateForm = () => {
        let valid = true;
        const errorMesgs = { ...errorMessage };
        // Validate name
        if (validator.isEmpty(name)) {
            errorMesgs.nameError = 'Name is required';
            valid = false;
        } else {
            errorMesgs.nameError = '';
        }

        // Validate email
        if (validator.isEmpty(email)) {
            errorMesgs.emailError = 'Email is required';
            valid = false;
        } else if (!validator.isEmail(email)) {
            errorMesgs.emailError = 'Invalid email format';
            valid = false;
        } else {
            errorMesgs.emailError = '';
        }

        // Validate phone
        if (validator.isEmpty(phone)) {
            errorMesgs.phoneError = 'Phone is required';
            valid = false;
        } else if (!validator.isMobilePhone(phone)) {
            errorMesgs.phoneError = 'Invalid mobile number';
            valid = false;
        } else {
            errorMesgs.phoneError = '';
        }

        // Validate subject
        if (validator.isEmpty(subject)) {
            errorMesgs.subjectError = 'Subject is required';
            valid = false;
        } else {
            errorMesgs.subjectError = '';
        }

        // Validate subject
        if (validator.isEmpty(message)) {
            errorMesgs.messageError = 'Message is required';
            valid = false;
        } else {
            errorMesgs.messageError = '';
        }

        setErrorMessage(errorMesgs)
        return valid
    }


    function submit() {
        if (validateForm()) {
            const messageData = {
                name: name,
                phone: phone,
                email: email,
                subject: subject,
                message: message
            }
            // alert(JSON.stringify(messageData))
            fetch(`${process.env.REACT_APP_URL_APP_PATH}/users/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(messageData)
                })
                .then(response => response.json())
                .then(result => {
                    if (result.status === 200) {
                        console.log(`Thank you for contacting Mini Developer, one of our team memebers will get back to you soon`);
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

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', background: 'white', padding: '3vw' }} className='screen'>
            <SEOComponent
                seoData={{
                    seo_slug: "contact-us",
                    seo_title: "Contact Us | Mini Developer",
                    seo_description: "Mini Developer team is happy to reply to your queries and messages within 48 hours. Contact us anytime."
                }} />
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-evenly', alignItems: 'center' }} >
                <Grid container columns={{ xs: 2, sm: 8, md: 12 }}>
                    {/* contact us details */}
                    <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography component="h2" variant='h4' style={{ color: '#333440', textAlign: 'center', fontWeight: 'bold' }}>
                            GET IN TOUCH
                        </Typography>

                        <ul style={{ listStyleType: 'none' }}>
                            {/* Email */}
                            <li spacing={1} style={titleCss}>
                                <a href={`mailto:${process.env.REACT_APP_CONTACT_US_GMAIL}`}
                                    className="google social">
                                    <img src={email_icon} loading="lazy" alt="" width={'30vmin'} />
                                </a>
                                {/* <SocialIcon network="email" url={`mailto:${process.env.REACT_APP_CONTACT_US_GMAIL}`} /> */}
                                <a style={textCss} href={`mailto:${process.env.REACT_APP_CONTACT_US_GMAIL}`} target="_blank" rel="noopener noreferrer"> {process.env.REACT_APP_CONTACT_US_GMAIL} </a>
                            </li>

                            {/* What's app */}
                            <li spacing={1} style={titleCss}>
                                <a href={process.env.REACT_APP_CONTACT_US_WHATS_APP}
                                    className="whatsapp social">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                </a>
                                {/* <SocialIcon network="whatsapp" url={process.env.REACT_APP_CONTACT_US_WHATS_APP} /> */}
                                <a style={textCss} href={process.env.REACT_APP_CONTACT_US_WHATS_APP} target="_blank" rel="noopener noreferrer"> {process.env.REACT_APP_CONTACT_US_WHATS_APP_NAME} </a>
                            </li>

                            {/* Facebook */}
                            <li spacing={1} style={titleCss}>
                                <a href={process.env.REACT_APP_CONTACT_US_FACEBOOK}
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>

                                {/* <SocialIcon network="facebook" url={process.env.REACT_APP_CONTACT_US_FACEBOOK} /> */}
                                <a style={textCss} href={process.env.REACT_APP_CONTACT_US_FACEBOOK} target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_CONTACT_US_FACEBOOK_NAME}</a>
                            </li>

                            {/* Instagram */}
                            <li spacing={1} style={titleCss}>
                                <a href={process.env.REACT_APP_CONTACT_US_INSTAGRAM}
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>

                                {/* <SocialIcon network="instagram" url={process.env.REACT_APP_CONTACT_US_INSTAGRAM} /> */}
                                <a variant='p' style={textCss} href={process.env.REACT_APP_CONTACT_US_INSTAGRAM} target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_CONTACT_US_INSTAGRAM_NAME}</a>
                            </li>

                            {/*Location */}
                            <li spacing={1} style={titleCss}>
                                {/* <FontAwesomeIcon icon={faApper} size="2x" /> */}
                                {/* <SocialIcon network="email" /> */}
                                <img src={location_logo} loading="lazy" alt="" width={'30vmin'} />
                                <Typography component="p" variant='p' style={textCss}>{process.env.REACT_APP_CONTACT_US_LOCATION}</Typography>
                            </li>
                        </ul>
                    </Grid>

                    {/* Form Send an email form */}
                    <Grid item xs={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        {/* Name */}
                        <Typography component="p" variant='p' style={formTitleCss}> Name <span style={{ color: 'red' }}> * </span> </Typography>
                        <Grid container spacing={1} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    defaultValue={name}
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    error={Boolean(errorMessage.nameError)}
                                    helperText={errorMessage.nameError}
                                    fullWidth />
                            </Grid>
                        </Grid>

                        {/* Email */}
                        <Typography component="p" variant='p' style={formTitleCss}> Email <span style={{ color: 'red' }}> * </span> </Typography>
                        <Grid container spacing={1} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    defaultValue={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                    error={Boolean(errorMessage.emailError)}
                                    helperText={errorMessage.emailError}
                                    fullWidth />
                            </Grid>
                        </Grid>

                        {/* Phone */}
                        <Typography component="p" variant='p' style={formTitleCss}> Phone <span style={{ color: 'red' }}> * </span> </Typography>
                        <Grid container spacing={1} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    defaultValue={phone}
                                    onChange={(event) => {
                                        setPhone(event.target.value)
                                    }}
                                    error={Boolean(errorMessage.phoneError)}
                                    helperText={errorMessage.phoneError}
                                    fullWidth />
                            </Grid>
                        </Grid>

                        {/* Subject */}
                        <Typography component="p" variant='p' style={formTitleCss}> Subject <span style={{ color: 'red' }}> * </span> </Typography>
                        <Grid container spacing={1} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    defaultValue={subject}
                                    onChange={(event) => {
                                        setSubject(event.target.value)
                                    }}
                                    error={Boolean(errorMessage.subjectError)}
                                    helperText={errorMessage.subjectError}
                                    fullWidth />
                            </Grid>
                        </Grid>

                        {/* Message */}
                        <Typography component="p" variant='p' style={formTitleCss}> Message <span style={{ color: 'red' }}> * </span> </Typography>
                        <Grid container spacing={1} >
                            <Grid item xs={8} md={12}>
                                <TextField
                                    required
                                    defaultValue={message}
                                    onChange={(event) => {
                                        setMessage(event.target.value)
                                    }}
                                    error={Boolean(errorMessage.messageError)}
                                    helperText={errorMessage.messageError}
                                    fullWidth />
                            </Grid>
                        </Grid>

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            style={{ margin: '1vmin' }}
                            onClick={() => submit()}
                        > Submit </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Stack >
    )
}