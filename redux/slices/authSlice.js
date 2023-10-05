import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  isAuth: Boolean(localStorage.getItem("access_token")),
  firstName: localStorage.getItem("first_name"),
  lastName: localStorage.getItem("last_name"),
  token: localStorage.getItem("access_token"),
  exp: localStorage.getItem("exp"),
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
    },
    setUserData: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.exp = action.payload.exp;
    },
    logoutUser: (state, action) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("exp");
      localStorage.removeItem("first_name");
      localStorage.removeItem("last_name");
      state.isAuth = false;
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const {setAuth, setUserData, logoutUser} = auth.actions;
export default auth.reducer;
