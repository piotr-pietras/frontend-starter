import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { store } from "./services/redux";
import { theme } from "./services/theme";

const container = document.getElementById("react-app");
const root = createRoot(container);

root.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);
