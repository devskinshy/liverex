import React, {useState} from 'react';
import {Box, IconButton, ListItemText, Menu, MenuItem} from "@mui/material";
import {FilterListRounded} from "@mui/icons-material";

const LiveReSort = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const toggle = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <FilterListRounded/>
      </IconButton>
      <Menu open={toggle} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>최신순</MenuItem>
        <MenuItem onClick={handleClose}>댓글순</MenuItem>
        <MenuItem onClick={handleClose}>좋아요순</MenuItem>
      </Menu>
    </Box>
  );
};

export default LiveReSort;