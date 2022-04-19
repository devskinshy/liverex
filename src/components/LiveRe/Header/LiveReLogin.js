import React, {useState} from 'react';
import {Button, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import SocialIcon from "../../common/SocialIcon";

const LiveReLoginItem = ({sns}) => {
  return (
    <MenuItem>
      <ListItemIcon>
        <SocialIcon sns={sns} size={20}/>
      </ListItemIcon>
      <ListItemText>
        {sns}
      </ListItemText>
    </MenuItem>
  )
};

const LiveReLogin = ({list}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const toggle = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Button color={'inherit'} onClick={handleClick}>Login</Button>
      <Menu open={toggle} anchorEl={anchorEl} onClose={handleClose}>
        {
          list.map((sns) => (
            <LiveReLoginItem key={sns} sns={sns}/>
          ))
        }
      </Menu>
    </>
  );
};

export default LiveReLogin;