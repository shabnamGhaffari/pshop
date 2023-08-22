import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [],
  totalPrice: 0,
};

export const basket = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    addToBasket: (state, action) => {
      state.count += 1;
      state.totalPrice += action.payload.price;
      const itemFounded = state.items?.find(
        item => item?.id === action.payload.id
      );
      const itemFoundedIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
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
        state.items.push(formattedProduct);
      }
    },
    decrementAmount: (state, action) => {
      state.count -= 1;
      console.log(state.count);
      state.totalPrice -= action.payload.price;
      const itemFounded = state.items?.find(
        item => item?.id === action.payload.id
      );
      const itemFoundedIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      itemFounded.count -= 1;
      itemFounded.totalPrice -= itemFounded.price;
      state.items[itemFoundedIndex] = itemFounded;
    },
    removeFromBasket: (state, action) => {
      const removedProductCount = action.payload.count;
      const removedProductPrice = action.payload.price;
      state.count -= removedProductCount;
      state.totalPrice -=
        Number(removedProductCount) * Number(removedProductPrice);
      state.items = state.items.filter(item => item.id !== action.payload.id);
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
  decrementAmount,
  removeFromBasket,
  reset,
} = basket.actions;
export default basket.reducer;
