import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../services/redux/store";

export const selectTestFeature = createSelector(
  (state: State) => state.testFeature,
  ({ quantity, request }) => {
    return {
      quantity,
      testData: request?.received || [],
      isPending: request.pending,
    };
  }
);
