import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice"
export const store = configureStore({
    reducer: {
        basketReducer,
      },
  devTools: process.env.NODE_ENV !== "production",
});

