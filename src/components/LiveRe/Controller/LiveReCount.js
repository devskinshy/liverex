import React from 'react';
import {Typography} from "@mui/material";

const LiveReCount = ({count=0}) => {
  return (
    <Typography variant={'button'}>{count} Comments</Typography>
  );
};

export default LiveReCount;