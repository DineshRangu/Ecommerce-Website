import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // ✅ import uuid

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // ✅ Assign a unique cartId to each item
      state.push({ ...action.payload, cartId: uuidv4() });
    },
    RemoveItem: (state, action) => {
      // ✅ Remove based on cartId, not id
      return state.filter((item) => item.cartId !== action.payload);
    }
  }
});

export const { addItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
