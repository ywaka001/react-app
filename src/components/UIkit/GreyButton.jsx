import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.grey["300"],
        fontSize: 16,
        height: 48,
        marginButton: 16,
        width: 256
    }));

const GreyButton = (props) => {
    return(
        <StyledButton variant="contained" onClick={props.onClick}>
            {props.label}
        </StyledButton>
    );
}

export default GreyButton