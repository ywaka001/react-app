import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  background: '#2E3B55',
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

export default function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">
          ヘッダータイトル
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
}
