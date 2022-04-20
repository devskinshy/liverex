import React from 'react';
import {Box, styled} from "@mui/material";
import LiveReLogin from "./LiveReLogin";
import LiveReCopyright from "./LiveReCopyright";

const RootStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const LiveReHeader = ({list}) => {
  return (
    <RootStyled>
      <LiveReLogin list={list}/>
      <Box flexGrow={1}/>
      <LiveReCopyright/>
    </RootStyled>
  );
};

export default LiveReHeader;