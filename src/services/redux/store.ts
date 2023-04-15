import { configureStore } from "@reduxjs/toolkit";
import { reducer } from ".";

export const store = configureStore({
  reducer,
});

export const state = store.getState();
export type State = typeof state;

export const dispatch = store.dispatch;
