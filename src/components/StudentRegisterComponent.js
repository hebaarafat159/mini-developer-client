import React from 'react'
import { TextField, Stack, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';
// eslint-disable-next-line 
import StudentRegisterLevelsComponent from './StudentRegisterLevelsComponent.js'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function StudentRegisterComponent({ index, requestData, requestErrorMsgs, updateChildrenArray, courseObject }) {
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
        }
    };

    function removeChildComponent(childIndex) {
        const updatedChildren = requestData.children.filter((child, index) => index !== childIndex);
        // alert(`Deleted Array: ${JSON.stringify(updatedChildren)}`);
        updateChildrenArray(updatedChildren)
    }

    function handleHasComputerSelection(selection) {
        requestData.children[index].has_computer = selection;
        updateChildProperty(Object.keys(requestData.children[index])[3], selection)
    }

    function handleHasLessonsBeforeSelection(selection) {
        requestData.children[index].has_lessons_before = selection;
        updateChildProperty(Object.keys(requestData.children[index])[6], selection)
    }

    // eslint-disable-next-line 
    function handleCodingLevelSelection(selection) {
        requestData.children[index].course_level = selection;
        updateChildProperty(Object.keys(requestData.children[index])[5], selection)
    }

    const Item = styled(Paper)(({ theme }) => ({
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
                        value={requestData.children[index].first_name}
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
                        value={requestData.children[index].last_name}
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
                        {/* delete child Button */}
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
                    {/* does your child has a computer */}
                    <YesOrNoComponent displayText={'Does your child have a Computer?'} handleSelection={handleHasComputerSelection} selectedValue={false} />
                </Grid>
                {/* Does your child have coding lessons before */}
                <Grid item xs={12}>
                    <YesOrNoComponent displayText={'Does your child have Coding Lessons Before?'} handleSelection={handleHasLessonsBeforeSelection} selectedValue={false} />
                    {/* <StudentRegisterLevelsComponent levels={courseObject.levels} handleSelection={handleCodingLevelSelection} child={requestData.children[index]} /> */}
                </Grid>
            </Grid>
        </Stack>
    )
}