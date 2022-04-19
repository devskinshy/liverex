import React from 'react';
import {Box, Button, Divider, IconButton, Stack, Typography} from "@mui/material";
import {SortRounded} from "@mui/icons-material";
import LiveReContent from "./LiveReContent";
import styled from "@emotion/styled";

const ControllerStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
})

const CommentsStyled = styled(Stack)(({theme}) => ({

}))

const LiveReContents = ({list}) => {
  return (
    <Box>
      <ControllerStyled>
        <Typography variant={'button'}>0 Comments</Typography>
        <Box sx={{flexGrow: 1}}/>
        <IconButton>
          <SortRounded/>
        </IconButton>
      </ControllerStyled>
      <Divider/>
      <Stack>
        {list.map(() => (
          <>
            <LiveReContent/>
            <Divider/>
          </>
        ))}
      </Stack>
      <Button fullWidth color={'inherit'}>More</Button>
    </Box>
  );
};

export default LiveReContents;