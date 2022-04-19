import React from 'react';
import {Avatar, Box, Button, Divider, IconButton, Stack, Typography} from "@mui/material";
import ReactQuill from "react-quill";
import {Edit, LocationOn, SortRounded} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import LiveReTemplate from "../components/LiveRe/LiveReTemplate";
import LiveReHeader from "../components/LiveRe/Header/LiveReHeader";
import LiveReCopyright from "../components/LiveRe/Header/LiveReCopyright";
import LiveReLogin from "../components/LiveRe/Header/LiveReLogin";
import LiveReEditor from "../components/LiveRe/Editor/LiveReEditor";
import LiveReContents from "../components/LiveRe/Main/LiveReContents";

const LiveRe = () => {
  return (
    <LiveReTemplate>
      <LiveReHeader>
        <LiveReLogin list={['kakao', 'naver', 'google', 'facebook']}/>
        <Box sx={{flexGrow: 1}}/>
        <LiveReCopyright/>
      </LiveReHeader>
      <LiveReEditor initValue={'123213213'}/>
      <LiveReContents list={[1, 2, 3]}/>
    </LiveReTemplate>
  );
};

export default LiveRe;