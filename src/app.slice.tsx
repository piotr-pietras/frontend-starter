import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isInitialized: boolean;
  paletteMode: PaletteMode;
}
const initialState: InitialState = {
  isInitialized: false,
  paletteMode: "dark",
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initialized(state) {
      state.isInitialized = true;
    },
    pallateToggled(state) {
      state.paletteMode = state.paletteMode === "light" ? "dark" : "light";
    },
  },
});
