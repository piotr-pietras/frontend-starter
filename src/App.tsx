import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { theme } from "./services/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
