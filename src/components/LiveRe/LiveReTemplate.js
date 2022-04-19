import React from 'react';
import {Container} from "@mui/material";

const LiveReTemplate = ({children}) => {
  return (
    <Container maxWidth={false}>
      {children}
    </Container>
  );
};

export default LiveReTemplate;