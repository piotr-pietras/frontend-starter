import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RequestState, reduceRequestUpdate } from "../../services/redux/fetch";

interface InitialState {
  request: RequestState<any>;
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
      reduceRequestUpdate(state, payload);
    },
    qunatityChanged(state, { payload }: PayloadAction<number>) {
      state.quantity = payload;
    },
  },
});
