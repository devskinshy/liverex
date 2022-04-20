import React from 'react';
import {Box, Button, Stack} from "@mui/material";
import LiveReContent from "./comment/LiveReContent";

const LiveReMain = ({list}) => {
  return (
    <Box>
      {list.map((item, index) => (
        <LiveReContent key={index}/>
      ))}
      <Button fullWidth color={'inherit'}>More</Button>
    </Box>
  );
};

export default LiveReMain;