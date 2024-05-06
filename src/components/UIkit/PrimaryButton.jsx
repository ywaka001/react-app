import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    backgroundColor:"#4dd0e1",
    color: "#000",
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    width: 256
});

const PrimaryButton = (props) => {
    return(
        <StyledButton variant="contained" onClick={props.onClick}>
            {props.label}
        </StyledButton>
    );
}

export default PrimaryButton