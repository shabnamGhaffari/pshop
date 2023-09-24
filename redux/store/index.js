import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import authReducer from "../slices/authSlice";
import addressReducer from "../slices/addressSlice";
export const store = configureStore({
    reducer: {
        basketReducer,
        authReducer,
        addressReducer
      },
  devTools: process.env.NODE_ENV !== "production",
});

