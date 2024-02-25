import React from 'react'
import { TextField, Stack, } from '@mui/material'
import cssStyle from '../css/styles.module.css'
// eslint-disable-next-line
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';

export default function StudentRegisterComponent({ index, registerData, errors, updateRegistrationDataProperty }) {
    const minAge = 0
    const maxAge = 14

    function updateChildProperty(index, propertyName, newValue) {
        if (index !== -1) {
            const updatedChildren = [...registerData.children];
            updatedChildren[index] = {
                ...updatedChildren[index],
                [propertyName]: newValue,
            };
            updateRegistrationDataProperty(Object.keys(registerData)[8], updatedChildren);
        }
    };

    function removeChildComponent(childIndex) {
        alert(`delete child ${childIndex}`)
        const updatedChildren = registerData.children.filter((child, index) => index !== childIndex);
        updateRegistrationDataProperty(Object.keys(registerData)[8], updatedChildren);
    }

    function handleHasComputerSelection(selection) {
        updateChildProperty(Object.keys(registerData.children[index])[3], selection)
    }

    return (
        <Stack direction={"column"} spacing={1} className={cssStyle.register_form_subcomponent_withborder} >
            <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    style={{ width: '30%' }}
                    value={registerData.children[index].first_name}
                    onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[0], event.target.value)}
                    error={Boolean(errors.children[index].childFirstName)}
                    helperText={errors.children[index].childFirstName}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    style={{ width: '30%' }}
                    value={registerData.children[index].last_name}
                    onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[1], event.target.value)}
                    error={Boolean(errors.children[index].childLastName)}
                    helperText={errors.children[index].childLastName}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Age"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: minAge, max: maxAge }}
                    style={{ width: '20%' }}
                    value={registerData.children[index].age}
                    defaultValue={minAge}
                    onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[2], event.target.value)}
                    error={Boolean(errors.children[index].age)}
                    helperText={errors.children[index].age}
                />
                {
                    (registerData.children && registerData.children.length > 1) ?
                        < IconButton aria-label="delete" size="small" onClick={() => removeChildComponent(index)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton> :
                        null
                }
            </Stack>
            <YesOrNoComponent displayText={'Does your child have a Computer?'} handleSelection={handleHasComputerSelection} />

        </Stack >
    )
}