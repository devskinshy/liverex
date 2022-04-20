import React from 'react';
import {Box, Divider, styled} from "@mui/material";
import LiveReCount from "./LiveReCount";
import LiveReSort from "./LiveReSort";

const RootStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const LiveReController = ({count}) => {
  return (
    <>
      <RootStyled>
        <LiveReCount count={count}/>
        <Box flexGrow={1}/>
        <LiveReSort />
      </RootStyled>
      <Divider/>
    </>
  );
};

export default LiveReController;