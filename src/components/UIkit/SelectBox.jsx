import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)({
    marginBottom: 16,
    minWidth: 128,
    width: "100%"
});

const SelectBox = (props) => {
    return (
        <StyledFormControl>
            <InputLabel>{props.label}</InputLabel>
            <Select
                required={props.required}
                value={props.value}
                onChange={(event) => props.select(event.target.value)}
            >
                {props.options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    );
}

export default SelectBox;
