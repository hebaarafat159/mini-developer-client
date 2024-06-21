import React from 'react'
import { TextField, Stack, Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
        // alert(`delete child ${childIndex}`)
        const updatedChildren = registerData.children.filter((child, index) => index !== childIndex);
        updateRegistrationDataProperty(Object.keys(registerData)[8], updatedChildren);
    }

    function handleHasComputerSelection(selection) {
        updateChildProperty(Object.keys(registerData.children[index])[3], selection)
    }

    const Item = styled(Paper)(({ theme }) => ({
        // margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }));

    return (
        <Stack direction="column" spacing={2} sx={{ justifyContent: 'space-evenly', border: 'gray .3vmin solid', padding: '1vmin' }}>
            <Grid container spacing={1} >
                {/* First Name */}
                <Grid item xs={8} md={4}>
                    <Item>
                        <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            value={registerData.children[index].first_name}
                            onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[0], event.target.value)}
                            error={Boolean(errors.children[index].childFirstName)}
                            helperText={errors.children[index].childFirstName}
                            fullWidth />
                    </Item>
                </Grid>

                {/* last Name */}
                <Grid item xs={8} md={4}>
                    <Item>
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            value={registerData.children[index].last_name}
                            onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[1], event.target.value)}
                            error={Boolean(errors.children[index].childLastName)}
                            helperText={errors.children[index].childLastName}
                            fullWidth />
                    </Item>
                </Grid>

                {/* Age */}
                <Grid item xs={2} md={2}>
                    <Item>
                        <TextField
                            required
                            id="outlined-required"
                            label="Age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{ min: minAge, max: maxAge }}
                            value={registerData.children[index].age}
                            defaultValue={minAge}
                            onChange={(event) => updateChildProperty(index, Object.keys(registerData.children[index])[2], event.target.value)}
                            error={Boolean(errors.children[index].age)}
                            helperText={errors.children[index].age}
                            fullWidth />
                        {
                            (registerData.children && registerData.children.length > 1) ?
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