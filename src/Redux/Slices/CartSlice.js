import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    calculatePrice: (state) => {
      state.totalPrice = state.value.reduce((sum, item) => sum + item.price, 0);
    },
  },
});

export const { add, remove, calculatePrice } = cartSlice.actions;
export default cartSlice.reducer;
