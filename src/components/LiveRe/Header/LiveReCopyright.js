import React from 'react';
import {Box, Typography} from "@mui/material";

const LiveReCopyright = () => {
  return (
    <Box>
      <Typography variant={'caption'} color={'grey.500'}>Powered by </Typography>
      <img src={'https://livere.com/img/nav/logo_livere_main-colored.png'} alt={'logo'} width={56} height={11}/>
    </Box>
  );
};

export default LiveReCopyright;