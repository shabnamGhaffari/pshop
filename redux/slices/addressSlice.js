import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  addressId:  localStorage.getItem("address") !== null
  ? JSON.parse(localStorage.getItem("address"))
  : null
};
const setAddressFunc = (addressId) => {
  localStorage.setItem("address", JSON.stringify(addressId));
};
export const address = createSlice({
  name: "address",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      if(action.payload.checked){
        state.addressId = action.payload.value;
        setAddressFunc(action.payload.value)
      }
      else{
        state.addressId=null
        setAddressFunc(null)
      }
    },
  },
});

export const {setUserAddress} = address.actions;
export default address.reducer;
