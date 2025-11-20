import React from 'react'
import { TextField, Stack, Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import YesOrNoComponent from './YesOrNoComponent';
// eslint-disable-next-line 
import StudentRegisterLevelsComponent from './StudentRegisterLevelsComponent.js'

export default function StudentRegisterComponent({ index, requestData, requestErrorMsgs, updateChildrenArray, courseObject, dateFormate }) {
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

    function handlePreviousCodingLessonsSelection(selection) {
        requestData.children[index].previous_coding_lessons = selection;
        updateChildProperty(Object.keys(requestData.children[index])[6], selection)
    }

    // eslint-disable-next-line 
    function handleCodingLevelSelection(selection) {
        requestData.children[index].course_level = selection;
        updateChildProperty(Object.keys(requestData.children[index])[5], selection)
    }

    return (
        <Stack direction="column" spacing={1} sx={{ justifyContent: 'space-evenly', border: 'gray .3vmin solid', padding: '1vmin' }}>

            <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* First Name */}
                <Grid item xs={8} md={8}>
                    <Typography component="p" variant='p' style={{ color: '#4F8DB9', fontWeight: 'bold', alignItems: 'flex-start' }}> Child {index + 1} </Typography>
                </Grid>
                {/* delete child button icon */}
                <Grid item xs={4} md={4} style={{ color: '#4F8DB9', fontWeight: 'bold', display: 'flex', justifyContent: 'flex-end', padding: '1vmin', alignItems: 'flex-end' }}>
                    {
                        (requestData.children && requestData.children.length > 1) ?
                            < IconButton aria-label="delete" size="small" onClick={() => removeChildComponent(index)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton> :
                            null
                    }
                </Grid>
            </Grid>
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
                {/* <Grid item xs={2} md={2}>
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
                </Grid> */}

                {/* Date of Birth */}
                <Grid item xs={8} md={4}>
                    <TextField
                        required
                        label="Date Of Birth"
                        placeholder={dateFormate}
                        defaultValue={requestData.children[index].dob}
                        value={requestData.children[index].dob}
                        onChange={(event) => updateChildProperty(index, Object.keys(requestData.children[index])[7], event.target.value)}
                        error={Boolean(requestErrorMsgs.children[index].dob)}
                        helperText={requestErrorMsgs.children[index].dob}
                        />
                </Grid>
                <Grid item xs={12}>
                    {/* does your child have a computer */}
                    <YesOrNoComponent displayText={'Does your child have a Computer?'} handleSelection={handleHasComputerSelection} selectedValue={false} />
                </Grid>
                {/* Has your child attended coding lessons before */}
                <Grid item xs={12}>
                    <YesOrNoComponent displayText={'Has your child had coding lessons before?'} handleSelection={handlePreviousCodingLessonsSelection} selectedValue={false} />
                    {/* <StudentRegisterLevelsComponent levels={courseObject.levels} handleSelection={handleCodingLevelSelection} child={requestData.children[index]} /> */}
                </Grid>
            </Grid>
        </Stack>
    )
}