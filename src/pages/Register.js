import React, { useState } from 'react'
import { Card, TextField, Stack, Typography, Button } from '@mui/material'
import cssStyle from '../css/styles.module.css'
import StudentRegisterComponent from '../components/StudentRegisterComponent'
import ProgrameTypeComponent from '../components/ProgrameTypeComponent'
// eslint-disable-next-line
import Icon from '@mui/material/Icon';

export default function Register() {

  const [parentFirstName, setParentFirstName] = useState('')
  const [parentLastName, setParentLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [programType, setProgramType] = useState('')
  const [location, setLocation] = useState('')
  const [hearAboutUs, setHearAboutUs] = useState('')
  const [questions, setQuestions] = useState('')
  const [children, setChildren] = useState([])
  // eslint-disable-next-line
  const [addNewChild, setAddNewChild] = useState(false)

  const [child, setChild] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    hasComputer: false
  });

  function updateChildProperty(propertyName, newValue) {
    setChild((prevObject) => ({
      ...prevObject,
      [propertyName]: newValue,
    }));
  };

  function addToChildren(newChild) {
    setChildren(...children, child)
  }

  function removeChildComponent(index) {
    alert(`delete child ${index}`)
    if (index !== null && index !== undefined) {
      children.splice(index, 1);
      setChildren(children);
    }
  }

  function submit() {
    //TODO handle send message
    alert
      (
        `parent: ${parentFirstName} ${parentLastName},
        email: ${email},
        Mobile: ${mobileNumber},
        Program Type: ${programType},
        LOcation: ${location},
        child: ${child.firstName} ${child.lastName} , age: ${child.age}, Has Computer: ${child.hasComputer},
        Hear About Us : ${hearAboutUs},
        Questions : ${questions}`
      )
    children.push(child)
    const childrenStr = JSON.stringify(children)
    console.log(`childrenStr : ${childrenStr}`)
    // fetch(`${process.env.VUE_APP_URL_APP_PATH}/shoppingLists/${list_id}/listItems/add`, {
    fetch(`http://localhost:4000/classrooms/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "first_name": parentFirstName,
          "last_name": parentLastName,
          "email": email,
          "mobile": mobileNumber,
          "hear_about_us": hearAboutUs,
          "questions": questions,
          "children": children,
          "location": location,
          "program_type": programType,
          "course_id": ""
        })
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
              onChange={(event) => setParentFirstName(event.target.value)}

            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue={parentLastName}
              onChange={(event) => setParentLastName(event.target.value)}
            />
          </Stack>

          {/* Email */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Email </Typography>
          <TextField
            required
            id="outlined-required"
            label="Email"
            type='email'
            defaultValue={email}
            className={cssStyle.register_form_text_field}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Mobile Number */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Mobile </Typography>
          <TextField
            required
            id="outlined-required"
            label="Mobile Number"
            type='tel'
            defaultValue={mobileNumber}
            className={cssStyle.register_form_text_field}
            onChange={(event) => setMobileNumber(event.target.value)}
          />

          {/* add new child layout */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Children </Typography>

          {children && children.length > 0
            && children.map((child, index) => < StudentRegisterComponent
              child={child}
              key={index}
              updateChildProperty={updateChildProperty}
              removeChildComponent={removeChildComponent}
              addToChildren={addToChildren} />)}

          {/* case of add new child after having children */}
          < StudentRegisterComponent
            child={child}
            key={-1}
            updateChildProperty={updateChildProperty}
            removeChildComponent={removeChildComponent}
            addToChildren={addToChildren} />

          {/* program type In=person or Online */}
          <ProgrameTypeComponent location={location} setLocation={setLocation} programType={programType} setProgramType={setProgramType} />

          {/* hear about us */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> How did you hear about us? </Typography>
          <TextField
            required
            id="outlined-required"
            defaultValue={hearAboutUs}
            className={cssStyle.register_form_text_field}
            onChange={(event) => setHearAboutUs(event.target.value)}
          />

          {/* Any Questions */}
          <Typography style={{ fontSize: '1.5vw', color: '#333440' }}> Do you have any questions or comments? </Typography>
          <TextField
            required
            id="outlined-required"
            defaultValue={questions}
            className={cssStyle.register_form_text_field}
            onChange={(event) => setQuestions(event.target.value)}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            onClick={() => submit()}
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