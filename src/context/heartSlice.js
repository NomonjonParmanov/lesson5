import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "wishlist",
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const heartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleToWishes(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleToWishes } = heartSlice.actions;

export default heartSlice.reducer;
