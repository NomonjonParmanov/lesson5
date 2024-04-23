import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const heartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = heartSlice.actions;

export default heartSlice.reducer;
