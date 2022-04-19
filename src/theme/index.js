import React from 'react';
// material
import {CssBaseline} from "@mui/material";
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// themeOptions
import themeOptions from "./theme";

const ThemeProvider = ({children}) => {
  const theme = createTheme(themeOptions);

  console.log(theme)
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;