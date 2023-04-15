import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isInitialized: boolean;
}
const initialState: InitialState = {
  isInitialized: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initialized(state, _: PayloadAction<boolean>) {
      state.isInitialized = true;
    },
  },
});
