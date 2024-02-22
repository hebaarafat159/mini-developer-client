import React from 'react'
import { TextField, Stack, } from '@mui/material'
import cssStyle from '../css/styles.module.css'
// eslint-disable-next-line
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';

export default function StudentRegisterComponent({ index, child, updateChildProperty, errors, removeChildComponent }) {
    // alert(`Key: ${index}`)
    const minAge = 0
    const maxAge = 14
    function handleHasComputerSelection(selection) {
        updateChildProperty(Object.keys(child)[3], selection)
    }

    return (
        <Stack direction={"column"} spacing={1} className={cssStyle.register_form_subcomponent_withborder} >
            <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    style={{ width: '30%' }}
                    value={child.first_name}
                    onChange={(event) => updateChildProperty(index, Object.keys(child)[0], event.target.value)}
                    error={Boolean(errors.childFirstName)}
                    helperText={errors.childFirstName}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    style={{ width: '30%' }}
                    value={child.last_name}
                    onChange={(event) => updateChildProperty(index, Object.keys(child)[1], event.target.value)}
                    error={Boolean(errors.childLastName)}
                    helperText={errors.childLastName}
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
                    value={child.age}
                    defaultValue={minAge}
                    onChange={(event) => updateChildProperty(index, Object.keys(child)[2], event.target.value)}
                    error={Boolean(errors.age)}
                    helperText={errors.age}
                />
                {/* {
                    (index !== -1) ?
                        < IconButton aria-label="delete" size="small" onClick={() => removeChildComponent(index)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton> :
                        null
                } */}
            </Stack>
            <YesOrNoComponent displayText={'Does your child have a Computer?'} handleSelection={handleHasComputerSelection} />

        </Stack >
    )
}