import {createSlice} from "@reduxjs/toolkit";
const items =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
const totalAmount =
  localStorage.getItem("cartTotal") !== null
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0;
const totalQuantity =
  localStorage.getItem("cartQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartQuantity"))
    : 0;

// adding this function to prevent repear code
const setCartListFunc = (items, totalAmount, totalQuantity) => {
  localStorage.setItem("cartList", JSON.stringify(items));
  localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
  localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
};
const initialState = {
  count: totalQuantity,
  items: items,
  totalPrice: totalAmount,
};

export const basket = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    addToBasket: (state, action) => {
      state.count += 1;
      state.totalPrice += Number(action.payload.price);
      const itemFounded = state.items?.find(
        item => item?.id === action.payload.id
      );
      const itemFoundedIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (itemFounded) {
        itemFounded.count += 1;
        itemFounded.totalPrice += Number(itemFounded.price);
        state.items[itemFoundedIndex] = itemFounded;
      } else {
        const formattedProduct = {
          ...action.payload,
          count: 1,
          totalPrice: Number(action.payload?.price),
        };
        state.items.push(formattedProduct);
      }
      setCartListFunc(
        state.items.map(item => item),
        state.totalPrice,
        state.count
      );
    },
    decrementAmount: (state, action) => {
      const itemFounded = state.items?.find(
        item => item?.id === action.payload.id
      );
      const itemFoundedIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      state.count -= 1;
      state.totalPrice -= action.payload.price;
      if (action.payload.count === 1) {
        state.items = state.items.filter(
          item => item?.id !== action.payload.id
        );
        setCartListFunc(
          state.items.map(item => item),
          state.totalPrice,
          state.count
        );
        return;
      }
      itemFounded.count -= 1;
      itemFounded.totalPrice -= Number(itemFounded.price);
      state.items[itemFoundedIndex] = itemFounded;
      setCartListFunc(
        state.items.map(item => item),
        state.totalPrice,
        state.count
      );
    },
    removeFromBasket: (state, action) => {
      const removedProductCount = action.payload.count;
      const removedProductPrice = action.payload.price;
      state.count -= removedProductCount;
      state.totalPrice -=
        Number(removedProductCount) * Number(removedProductPrice);
      state.items = state.items.filter(item => item.id !== action.payload.id);
      setCartListFunc(
        state.items.map(item => item),
        state.totalPrice,
        state.count
      );
    },
  },
});

export const {addToBasket, decrementAmount, removeFromBasket, reset} =
  basket.actions;
export default basket.reducer;
