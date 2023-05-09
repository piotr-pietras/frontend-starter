import { AppSlice } from "../../app.slice";
import { TestFeatureSlice } from "../../features/TestFeature/testFeature.slice";

export const reducer = {
  [AppSlice.name]: AppSlice.reducer,
  [TestFeatureSlice.name]: TestFeatureSlice.reducer,
};
