import { createSelector } from "@reduxjs/toolkit";
import { State } from "../services/redux";

export const selectAppBar = createSelector(
  (state: State) => state.app.paletteMode,
  (paletteMode) => {
    return {
      paletteMode,
    };
  }
);
