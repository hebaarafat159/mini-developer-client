import React from 'react'
import { TextField, Stack, } from '@mui/material'
import cssStyle from '../css/styles.module.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentRegisterComponent({ key, removeChildComponent }) {
    return (
        <Stack direction={"row"} spacing={1} className={cssStyle.register_form_subcomponent} >
            <TextField
                required
                id="outlined-required"
                label="First Name"
                style={{ width: '30%' }}
            // defaultValue={parentFirstName}
            />
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                style={{ width: '30%' }}
            // defaultValue={parentLastName}
            />
            <TextField
                required
                id="outlined-required"
                label="Age"
                style={{ width: '20%' }}
            // defaultValue={parentLastName}
            />
            <IconButton aria-label="delete" size="small" onClick={() => removeChildComponent(key)}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    )
}