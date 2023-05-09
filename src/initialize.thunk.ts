import { AppSlice } from "./app.slice";
import { thunkBuilder } from "./services/redux";

async function mockedInit() {
  //Test promise for initial app load
  const test = new Promise((res) =>
    setTimeout(() => {
      res("resolved");
    }, 3000)
  );
  return Promise.all([test]);
}

const { initialized } = AppSlice.actions;

export const initializeThunk = thunkBuilder(async (dispatch) => {
  await mockedInit();
  dispatch(initialized());
});
