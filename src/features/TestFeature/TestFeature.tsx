import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTestFeature } from "./testFeature.selector";
import { fetchTestDataThunk } from "./testFeature.thunk";
import { TestFeatureSlice } from "./testFeature.slice";

const { qunatityChanged } = TestFeatureSlice.actions;

export const TestFeature = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector(selectTestFeature);
  fetchTestDataThunk([quantity]);

  return (
    <div>
      <span>Test feature</span>
      <button
        onClick={() => {
          dispatch(qunatityChanged(quantity + 10));
        }}
      >
        more +10
      </button>
    </div>
  );
};
