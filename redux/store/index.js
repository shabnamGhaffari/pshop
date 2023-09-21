import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import authReducer from "../slices/authSlice";
export const store = configureStore({
    reducer: {
        basketReducer,
        authReducer
      },
  devTools: process.env.NODE_ENV !== "production",
});

