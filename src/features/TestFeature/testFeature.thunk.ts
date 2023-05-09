import axios from "axios";
import { TestFeatureSlice } from "./testFeature.slice";
import { thunkBuilder } from "../../services/redux";

const { requestUpdated } = TestFeatureSlice.actions;

export const fetchTestDataThunk = thunkBuilder(async (dispatch, getState) => {
  const {quantity} = getState().testFeature
  dispatch(requestUpdated({}));
  try {
    const response = await axios.post("/test", { quantity });
  } catch (error) {}
});
