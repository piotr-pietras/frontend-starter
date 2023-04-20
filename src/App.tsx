import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { useSelector } from "react-redux";
import { selectApp } from "./app.selector";
import { GlobalLoading } from "./common/GlobalLoading";
import { dispatch } from "./services/redux";
import { AppSlice } from "./app.slice";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./services/theme";

async function initialize() {
  //Test promise for initial app load
  const test = new Promise((res) =>
    setTimeout(() => {
      res("resolved");
    }, 3000)
  );
  return Promise.all([test]);
}

const {
  actions: { initialized },
} = AppSlice;

export const App = () => {
  const { isInitialized, paletteMode } = useSelector(selectApp);

  dispatch(async function (dispatch) {
    await initialize();
    dispatch(initialized());
  });

  return (
    <ThemeProvider theme={getTheme({ paletteMode })}>
      <CssBaseline />
      {!isInitialized ? <GlobalLoading /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
};
