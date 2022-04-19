import React from 'react';
import ThemeProvider from "./theme";
import RoutesProvider from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <RoutesProvider/>
    </ThemeProvider>
  );
};

export default App;