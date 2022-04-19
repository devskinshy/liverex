import React from 'react';
import {Typography} from "@mui/material";

const LiveReCopyright = () => {
  return (
    <>
      <Typography variant={'caption'} color={'grey.500'}>Powered by</Typography>
      <img src={'https://livere.com/img/nav/logo_livere_main-colored.png'} width={56} height={11}/>
    </>
  );
};

export default LiveReCopyright;