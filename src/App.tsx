import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { useSelector } from "react-redux";
import { selectApp } from "./app.selector";
import { GlobalLoading } from "./common/GlobalLoading";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./services/theme";
import { initializeThunk } from "./initialize.thunk";

export const App = () => {
  const { isInitialized, paletteMode } = useSelector(selectApp);

  initializeThunk();

  return (
    <ThemeProvider theme={getTheme({ paletteMode })}>
      <CssBaseline />
      {!isInitialized ? <GlobalLoading /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
};
