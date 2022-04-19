import React, {useState} from 'react';
import {Button, Divider, Paper} from "@mui/material";
import ReactQuill from "react-quill";

const LiveReEditor = ({initValue=''}) => {
  const [value, setValue] = useState(initValue);
  return (
    <Paper variant={'outlined'}>
      <ReactQuill
        readOnly={false}
        theme={'bubble'}
        placeholder={'Please Login'}
        modules={{toolbar: false}}
        value={value}
        onFocus={() => {console.log(123)}}
        onChange={setValue}
      />
      <Divider/>
      <Button fullWidth color={'inherit'}>Save</Button>
    </Paper>
  );
};

export default LiveReEditor;