import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  request: {
    pending: boolean;
    received?: any;
    error?: unknown;
  };
  quantity: number;
}
const initialState: InitialState = {
  request: {
    pending: false,
  },
  quantity: 10,
};

export const TestFeatureSlice = createSlice({
  name: "testFeature",
  initialState,
  reducers: {
    requestUpdated(
      state,
      { payload }: PayloadAction<{ received?: any; error?: unknown }>
    ) {
      if (payload.received) {
        state.request.received = payload.received;
        state.request.pending = false;
        return;
      }
      if (payload.error) {
        state.request.error = payload.error;
        state.request.pending = false;
        return;
      }
      state.request.pending = true;
    },
    qunatityChanged(state, { payload }: PayloadAction<number>) {
      state.quantity = payload;
    },
  },
});
