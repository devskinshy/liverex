import React from 'react';
import {Avatar, Box, Divider, IconButton, Stack, styled, Typography} from "@mui/material";
import {MapsUgcRounded, SettingsRounded, ThumbDownAltRounded, ThumbUpAltRounded} from "@mui/icons-material";

const RootStyled = styled(Box)(({theme}) => ({
  // display: 'flex',
  // padding: theme.spacing(2)
}))

const LiveReContent = () => {
  return (
    <>
      <Stack direction={'row'} spacing={1} p={2}>
        <Avatar  variant="rounded" src="avatar1.jpg"/>
        <Stack flexGrow={1}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} position={'relative'}>
            <Typography fontWeight={700} fontSize={'small'}>Michael Scott</Typography>
            <Box flexGrow={1}></Box>
            <IconButton size={'small'} sx={{position: 'absolute', top: 0, right: 0}}>
              <SettingsRounded sx={{ fontSize: 14 }}/>
            </IconButton>
          </Box>
          <Typography>
            요기에 내용이 들어갈거얌..
            요기에 내용이 들어갈거얌..
            요기에 내용이 들어갈거얌..
            요기에 내용이 들어갈거얌..
            요기에 내용이 들어갈거얌..
            요기에 내용이 들어갈거얌..
          </Typography>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box>
              <IconButton>
                <MapsUgcRounded fontSize={'small'}/>
              </IconButton>
            </Box>
            <Box flexGrow={1}/>
            <Box>
              <IconButton>
                <ThumbUpAltRounded fontSize={'small'}/>
              </IconButton>
              <IconButton>
                <ThumbDownAltRounded fontSize={'small'}/>
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Divider/>
    </>
  );
};

export default LiveReContent;