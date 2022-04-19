import React from 'react';
import {Box} from "@mui/material";
import styled from "@emotion/styled";

const RootStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline'
})

const LiveReHeader = ({children}) => {
  return (
    <RootStyled>
      {children}
    </RootStyled>
  );
};

export default LiveReHeader;