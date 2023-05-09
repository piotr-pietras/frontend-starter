import { ThunkDispatch } from "redux-thunk";
import { State, dispatch } from "./";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const thunkBuilder = (
  thunk: (
    dispatch: ThunkDispatch<State, any, AnyAction>,
    getState?: () => State
  ) => Promise<any>
) => {
  return (deps?: any[]) => {
    useEffect(() => {
      dispatch(thunk);
    }, deps || []);
  };
};
