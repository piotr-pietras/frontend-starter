import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { useDispatch, useSelector } from "react-redux";
import { selectApp } from "./app.selector";
import { GlobalLoading } from "./common/GlobalLoading";
import { dispatch, store } from "./services/redux";
import { AppSlice } from "./app.slice";

async function initialize() {
  //Test promise for initial initialization
  const test = new Promise((res) =>
    setTimeout(() => {
      res("resolved");
    }, 3000)
  );
  return Promise.all([test]);
}

export const App = () => {
  const { isInitialized } = useSelector(selectApp);
  dispatch(async function (dispatch) {
    await initialize();
    dispatch(AppSlice.actions.initialized());
  });

  return (
    <>
      <CssBaseline />
      {!isInitialized ? <GlobalLoading /> : <RouterProvider router={router} />}
    </>
  );
};
