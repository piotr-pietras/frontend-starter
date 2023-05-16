import axios from "axios";
import { TestFeatureSlice } from "./testFeature.slice";
import { thunkBuilder } from "../../services/redux/thunk";

const { requestUpdated } = TestFeatureSlice.actions;

export const useFetchTestDataThunk = thunkBuilder(
  async (dispatch, getState) => {
    const { quantity } = getState().testFeature;
    dispatch(requestUpdated({}));
    try {
      const received = (await axios.post("/test", { quantity })).data;
      dispatch(requestUpdated({ received }));
    } catch (error) {
      dispatch(requestUpdated({ error }));
    }
  }
);
