import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [],
  totalAmount: 0,
};

export const basket = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    addToBasket: (state,action) => {
      state.count += 1;
      const itemFounded = state.items?.find(item => item?.id === action.payload.id);
      const itemFoundedIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemFounded) {
        itemFounded.count += 1;
        itemFounded.totalPrice += itemFounded.price;
        state.items[itemFoundedIndex] = itemFounded;
      } else {
        const formattedProduct = {
          ...action.payload,
          count: 1,
          totalPrice: action.payload?.price,
        };
        console.log(formattedProduct);
        state.items.push(formattedProduct);
      }
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  addToBasket,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = basket.actions;
export default basket.reducer;
