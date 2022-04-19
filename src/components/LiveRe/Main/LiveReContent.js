import React from 'react';
import {Avatar, Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import {Edit, LocationOn} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import styled from "@emotion/styled";

const RootStyled = styled(Box)(({theme}) => ({
  display: 'flex',
  padding: theme.spacing(2)
}));

const LiveReContent = () => {
  return (
    <RootStyled>
      <Avatar variant="rounded" src="avatar1.jpg" />
      <Stack spacing={0.5}>
        <Typography fontWeight={700}>Michael Scott</Typography>
        <Typography variant="body2" color="text.secondary">
          <LocationOn sx={{color: grey[500]}} /> Scranton, PA
        </Typography>
      </Stack>
      <IconButton>
        <Edit sx={{ fontSize: 14 }} />
      </IconButton>
    </RootStyled>
  );
};

export default LiveReContent;