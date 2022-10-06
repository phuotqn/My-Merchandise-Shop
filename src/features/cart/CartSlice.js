import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  cartItems: [],
  cartTotalItems: 0,
  cartTotalSums: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      toast.success(`Add ${action.payload.title} to your Cart`, {
        position: 'top-left',
      });
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
