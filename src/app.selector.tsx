import { createSelector } from "@reduxjs/toolkit";
import { State } from "./services/redux/store";

export const selectApp = createSelector(
  (state: State) => state.app,
  ({ isInitialized, paletteMode }) => {
    return {
      isInitialized,
      paletteMode,
    };
  }
);
