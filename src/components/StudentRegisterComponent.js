import React from 'react'
import { TextField, Stack, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function StudentRegisterComponent({ index, requestData, requestErrorMsgs, updateChildrenArray }) {
    const minAge = 0
    const maxAge = 14

    function updateChildProperty(index, propertyName, newValue) {
        if (index !== -1) {
            const updatedChildren = [...requestData.children];
            updatedChildren[index] = {
                ...updatedChildren[index],
                [propertyName]: newValue,
            };
            updateChildrenArray(updatedChildren)
            // updateRegistrationDataProperty(Object.keys(requestData)[1], updatedChildren);
        }
    };

    function removeChildComponent(childIndex) {
        const updatedChildren = requestData.children.filter((child, index) => index !== childIndex);
        // requestData.children = updatedChildren;
        // updateRegistrationDataProperty(Object.keys(requestData)[1], updatedChildren);
        updateChildrenArray(updatedChildren)
    }

    function handleHasComputerSelection(selection) {
        requestData.children[index].has_computer = selection;
        updateChildProperty(Object.keys(requestData.children[index])[3], selection)
    }

    const Item = styled(Paper)(({ theme }) => ({
        // margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }));

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', border: 'gray .3vmin solid', padding: '1vmin' }}>

            <Typography component="p" variant='p' style={{ color: '#4F8DB9', fontWeight: 'bold', alignItems: 'flex-start' }}> Child {index + 1} </Typography>

            <Grid container spacing={1} >
                {/* First Name */}
                <Grid item xs={8} md={4}>
                    <TextField
                        required
                        label="First Name"
                        defaultValue={requestData.children[index].first_name}
                        // onChange={(event) => updateChildProperty(index, Object.keys(requestData.children[index])[0], event.target.value)}
                        onChange={(event) => updateChildProperty(index, Object.keys(requestData.children[index])[0], event.target.value)}
                        error={Boolean(requestErrorMsgs.children[index].first_name)}
                        helperText={requestErrorMsgs.children[index].first_name}
                        fullWidth
                    />
                </Grid>

                {/* last Name */}
                <Grid item xs={8} md={4}>
                    <TextField
                        required
                        label="Last Name"
                        defaultValue={requestData.children[index].last_name}
                        onChange={(event) => updateChildProperty(index, Object.keys(requestData.children[index])[1], event.target.value)}
                        error={Boolean(requestErrorMsgs.children[index].last_name)}
                        helperText={requestErrorMsgs.children[index].last_name}
                        fullWidth />
                </Grid>

                {/* Age */}
                <Grid item xs={2} md={2}>
                    <TextField
                        required
                        label="Age"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ min: minAge, max: maxAge }}
                        defaultValue={requestData.children[index].age}
                        value={requestData.children[index].age}
                        onChange={(event) => updateChildProperty(index, Object.keys(requestData.children[index])[2], event.target.value)}
                        error={Boolean(requestErrorMsgs.children[index].age)}
                        helperText={requestErrorMsgs.children[index].age}
                        fullWidth />
                </Grid>
                <Grid item xs={1} md={1}>
                    <Item>
                        {
                            (requestData.children && requestData.children.length > 1) ?
                                < IconButton aria-label="delete" size="small" onClick={() => removeChildComponent(index)}>
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton> :
                                null
                        }
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <YesOrNoComponent displayText={'Does your child have a Computer?'} handleSelection={handleHasComputerSelection} />
                </Grid>
            </Grid>
        </Stack>
    )
}