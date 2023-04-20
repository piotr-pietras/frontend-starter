import { createSelector } from "@reduxjs/toolkit";
import { State } from "./services/redux";

export const selectApp = createSelector(
  (state: State) => state.app,
  ({ isInitialized, paletteMode }) => {
    return {
      isInitialized,
      paletteMode,
    };
  }
);
