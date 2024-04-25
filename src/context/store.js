import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heartSlice";
export const store = configureStore({
  reducer: {
    wishlist: heartSlice,
  },
});
