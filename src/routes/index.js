import React from 'react';
// router
import {BrowserRouter, useRoutes} from "react-router-dom";
// routeOptions
import routeOptions from "./routes";

const Route = () => {
  return useRoutes(routeOptions);
}

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  );
};

export default RoutesProvider;