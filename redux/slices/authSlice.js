import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  isAuth: localStorage.getItem("access_token"),
  firstName: localStorage.getItem("first_name"),
  lastName: localStorage.getItem("last_name"),
};
export const auth = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
    },
    setUserData: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state, action) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("last_name");
      state.isAuth = false;
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const {setAuth, setUserData, logout} = auth.actions;
export default auth.reducer;
