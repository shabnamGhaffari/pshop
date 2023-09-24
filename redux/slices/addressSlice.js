import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  addressId: null,
};
export const address = createSlice({
  name: "address",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.addressId = action.payload;
    },
  },
});

export const {setUserAddress} = address.actions;
export default address.reducer;
