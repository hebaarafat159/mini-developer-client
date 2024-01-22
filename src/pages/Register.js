import React, { useState } from 'react'
import { Card, TextField, Stack, Typography, Button } from '@mui/material'
import cssStyle from '../css/styles.module.css'
import StudentRegisterComponent from '../components/StudentRegisterComponent'
import Icon from '@mui/material/Icon';

export default function Register() {

  const [parentFirstName, setParentFirstName] = useState('')
  const [parentLastName, setParentLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [children, setChildren] = useState([])

  const [childComponents, setChildComponents] = useState([]);

  function removeChildComponent(index) {
    alert(`delete child ${index}`)
    // childComponents.splice(index, 1);
    // setChildComponents(childComponents);
  }

  function addNewChildComponent() {
    setChildComponents([...childComponents, < StudentRegisterComponent removeChildComponent={removeChildComponent} />])
  }

  function submit() {
    //TODO handle send message
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
              defaultValue={parentFirstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue={parentLastName}
            />
          </Stack>

          {/* Email */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Email </Typography>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue={email}
            className={cssStyle.register_form_text_field}
          />

          {/* Mobile Number */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Mobile </Typography>
          <TextField
            required
            id="outlined-required"
            label="Mobile Number"
            defaultValue={mobileNumber}
            className={cssStyle.register_form_text_field}
          />

          {/* add new child layout */}
          <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >
            <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Children </Typography>
            <Icon color="primary" onClick={addNewChildComponent}> +</Icon>
          </Stack>
          {/* add new child */}
          {childComponents && childComponents.map((child, index) =>
          (
            < StudentRegisterComponent
              child={child}
              key={index}
              removeChildComponent={removeChildComponent} />
          ))}

          {/* Submit Button */}
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              background: 'linear-gradient(to bottom, #ffb093, #ed7d45)',
              fontSize: "2.5vmin",
              display: 'flex',
              width: '30vw'
            }}> Submit </Button>
        </Stack>
      </Stack>

    </Card>
  )
}