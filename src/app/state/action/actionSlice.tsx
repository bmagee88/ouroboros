import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

const initialState = {
  isWorking: false,
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsWorking: (state, action) => {
      state.isWorking = action.payload;
    },
  },
});

export const { setIsWorking } = actionSlice.actions;

//   // Other code such as selectors can use the imported `RootState` type
//   export const selectIsWorking = (state: RootState) => state.action.isWorking;

export default actionSlice.reducer;
