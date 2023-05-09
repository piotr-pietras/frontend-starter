import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../services/redux";

export const selectTestFeature = createSelector(
  (state: State) => state.testFeature,
  ({ quantity }) => {
    return {
        quantity,
    };
  }
);
